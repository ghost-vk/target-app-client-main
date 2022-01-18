/**
 * Configuration
 * @type {Object}
 */
let settings = {
  debug: false,
  excludes: [],
}

let standardEvents = [
  'addpaymentinfo',
  'addtocart',
  'addtowishlist',
  'completeregistration',
  'contact',
  'customizeproduct',
  'donate',
  'findlocation',
  'initiatecheckout',
  'lead',
  'pageview',
  'purchase',
  'schedule',
  'search',
  'starttrial',
  'submitapplication',
  'subscribe',
  'viewcontent',
]

// Private functions
const _loadScript = (src) => {
  // eslint-disable-line no-param-reassign
  return new Promise(function (resolve, reject) {
    let shouldAppend = false
    let el = document.querySelector('script[src="' + src + '"]')
    if (!el) {
      el = document.createElement('script')
      el.type = 'text/javascript'
      el.async = true
      el.src = src
      shouldAppend = true
    } else if (el.hasAttribute('data-loaded')) {
      resolve(el)
      return
    }

    el.addEventListener('error', () => {
      reject('Error event')
    })
    el.addEventListener('abort', () => {
      reject('Abort event')
    })
    el.addEventListener('load', () => {
      el.setAttribute('data-loaded', true)
      resolve()
    })

    if (shouldAppend) document.head.appendChild(el)
  })
}

const _logObject = (obj = {}) => console.log(JSON.stringify(obj, null, 4))

const _fbqEnabled = () => {
  if (typeof window.fbq === 'undefined') {
    if (settings.debug) {
      console.log('[Vue Facebook Pixel]: `window.fbq` is not defined, skipping')
    }

    return false
  }

  return true
}

// Public functions

/**
 * Init facebook tracking pixel
 * @param  {String} appId
 * @param  {object} [data={}]
 */
const init = async (appId, data = {}) => {
  try {
    if (window.fbq) return

    window.fbq = function () {
      window.fbq.queue = window.fbq.queue ? window.fbq.queue : []
      window.fbq.callMethod ? window.fbq.callMethod.apply(n, arguments) : window.fbq.queue.push(arguments)
    }

    const n = (window.fbq = function () {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments)
    })
    if (!window._fbq) window._fbq = n
    n.push = n
    n.loaded = !0
    n.version = '2.0'
    n.queue = []

    if (!_fbqEnabled()) return

    await _loadScript('https://connect.facebook.net/en_US/fbevents.js')

    if (settings.debug) {
      console.log(`[Vue Facebook Pixel] Initializing app ${appId}`)
    }

    query('init', appId, data)
    event('PageView')
  } catch (e) {
    throw new Error(`An error occurs when try to init Facebook Pixel: ${e}`)
  }
}

/**
 * Event tracking
 * @param  {String} name
 * @param  {object} [data={}]
 */
export const event = (name, data = {}) => {
  if (!_fbqEnabled()) return

  if (settings.debug) {
    console.groupCollapsed(`[Vue Facebook Pixel] Track event "${name}"`)
    console.log('With data:')
    _logObject(data)
    console.groupEnd()
  }

  if (!standardEvents.includes(name.toLowerCase())) {
    query('trackCustom', name, data)
  } else {
    query('track', name, data)
  }
}

/**
 * Submit a raw query to fbq, for when the wrapper limits user on what they need.
 * This makes it still possible to access the plain Analytics api.
 * @param mixed ...args
 */
const query = (...args) => {
  if (!_fbqEnabled()) return

  if (settings.debug) {
    console.groupCollapsed(`[Vue Facebook Pixel] Raw query`)
    console.log(`With data: `, ...args)
    console.groupEnd()
  }

  window.fbq(...args)
}

export default {
  install(app) {
    app.config.globalProperties.$fbq = {
      async init(config) {
        try {
          await init(config.appId, config.data)

          if (config.router) {
            const excludes = config.excludes || settings.excludes

            config.router.afterEach(({ path, name }) => {
              if (excludes.length && excludes.indexOf(name) !== -1) {
                return
              }

              event('PageView')
            })
          }
        } catch (e) {
          console.log(e)
        }
      },
      event,
      query,
    }

    const fbq = { event, query }

    app.provide('fbq', fbq)
  },
}
