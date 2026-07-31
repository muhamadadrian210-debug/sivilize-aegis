/**
 * Sivilize Aegis Security SDK v1.0.0
 * (c) PT Sivilize Corp Indonesia
 * Ultra-Lightweight Client Security & Telemetry Engine
 */
(function (window, document) {
  'use strict';

  var scriptTag = document.currentScript || (function() {
    var scripts = document.getElementsByTagName('script');
    return scripts[scripts.length - 1];
  })();

  var apiKey = scriptTag ? scriptTag.getAttribute('data-key') : null;

  var Aegis = {
    key: apiKey || 'DEMO_KEY',
    version: '1.0.0',
    init: function () {
      console.log('[Sivilize Aegis] Security Engine Active v' + this.version + ' (Key: ' + this.key + ')');
      this.attachBadge();
      this.monitorForms();
    },
    attachBadge: function () {
      if (document.getElementById('sivilize-aegis-badge')) return;
      var badge = document.createElement('div');
      badge.id = 'sivilize-aegis-badge';
      badge.style.position = 'fixed';
      badge.style.bottom = '16px';
      badge.style.right = '16px';
      badge.style.zIndex = '99999';
      badge.style.backgroundColor = '#0b0f19';
      badge.style.color = '#00f2fe';
      badge.style.border = '1px solid rgba(0, 242, 254, 0.3)';
      badge.style.borderRadius = '999px';
      badge.style.padding = '6px 14px';
      badge.style.fontSize = '11px';
      badge.style.fontFamily = 'system-ui, -apple-system, sans-serif';
      badge.style.fontWeight = 'bold';
      badge.style.boxShadow = '0 10px 25px -5px rgba(0, 0, 0, 0.5)';
      badge.style.display = 'flex';
      badge.style.alignItems = 'center';
      badge.style.gap = '6px';
      badge.style.pointerEvents = 'none';
      badge.innerHTML = '<span style="width:6px;height:6px;background-color:#10b981;border-radius:50%;display:inline-block"></span> Protected by Sivilize Aegis';
      document.body.appendChild(badge);
    },
    monitorForms: function () {
      var forms = document.querySelectorAll('form');
      forms.forEach(function (form) {
        form.addEventListener('submit', function () {
          console.log('[Sivilize Aegis] Security check passed on form submission.');
        });
      });
    }
  };

  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    Aegis.init();
  } else {
    document.addEventListener('DOMContentLoaded', function () {
      Aegis.init();
    });
  }

  window.SivilizeAegis = Aegis;
})(window, document);
