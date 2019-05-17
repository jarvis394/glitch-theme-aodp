// ==UserScript==
// @name         Glitch Atom One Dark Pro
// @namespace    https://github.com/jarvis394/glitch-theme-aodp
// @version      0.3
// @description  Atom One Dark Pro Theme for Glitch's Editor
// @author       jarvis394
// @match        https://glitch.com/edit/
// @run-at       document-start
// @grant        none
// @updateURL    https://raw.githubusercontent.com/jarvis394/glitch-theme-aodp/master/atom_one_dark_pro.theme.js
// ==/UserScript==

(function () {
  'use strict'

  /**
   * Adds styles to a page
   * @param {string} css Styles
   */
  const addCSS = (css) => {
    let head = document.getElementsByTagName('head')[0] || document.getElementsByTagName('html')[0]

    if (!head) return

    let style = document.createElement('style')
    style.type = 'text/css'
    style.innerHTML = css
    head.appendChild(style)
  }

  /**
   * Adds link to a page
   * @param {string} link Link
   */
  const addLink = (link) => {
    let head = document.getElementsByTagName('head')[0] || document.getElementsByTagName('html')[0]

    if (!head) return

    let linkEl = document.createElement('link')
    linkEl.rel = 'stylesheet'
    linkEl.href = link
    head.appendChild(linkEl)
  }

  // STYLES //

  addLink('https://code.cdn.mozilla.net/fonts/fira.css')

  // Font and colors
  addCSS(`
.CodeMirror-code .cm-keyword,.CodeMirror-code .cm-def,.CodeMirror-code .cm-comment,.CodeMirror-code .cm-string,.CodeMirror-code .cm-operator,.CodeMirror-code .cm-variable {
  font-weight: normal;
  font-style: normal;
  color: #cbcbcb
}

.text-editor .CodeMirror-cursor {
  border-left: 2px solid #558CFC !important
}

.CodeMirror-matchingbracket {
  background-color: rgba(0, 0, 0, 0) !important
}

.CodeMirror-code .CodeMirror-activeline-background {
  background-color: RGB(44,49,58) !important
}

.CodeMirror-code .cm-keyword {
  color: #C678DB;
  font-weight: bold
}

.CodeMirror-code .cm-comment {
  font-style: italic;
  color: #5C636F
}

.CodeMirror-code .cm-string {
  color: #98C37C
}

.CodeMirror-code .cm-property {
  color: #63AFED
}

.CodeMirror-code .cm-operator,.CodeMirror-code .cm-tag {
  color: #5bbfcb;
  font-weight: bold
}

.CodeMirror-code .cm-number,.CodeMirror-code .cm-atom {
  color: #D09A69
}

.CodeMirror-code .cm-qualifier {
  font-style: italic
}

.CodeMirror-code .cm-def {
  color: #D09A69
}

.CodeMirror-code .cm-link {
  color: #a4a4e4
}

.CodeMirror-code .cm-url {
  color: #dadada;
  text-decoration: underline
}

.CodeMirror-code .cm-header {
  color: #79e6d9;
  font-weight: bold
}

.CodeMirror-code .cm-strong {
  color: #fddd88;
  font-weight: bold
}

.CodeMirror-code .cm-em {
  font-style: italic
}

.CodeMirror-code .cm-quote {
  color: #fddd88
}

.CodeMirror-matchingbracket {
  border: 0.5px solid #888888
}

.CodeMirror-matchingtag {
  background-color: #444122
}

.CodeMirror-selected {
  background-color: #777
}

.CodeMirror-focused .CodeMirror-selected {
  background-color: #4B4C4F
}

.cm-matchhighlight {
  background-color: #4B4C4F
}
  `)

  // Background
  addCSS(`
    #application {
      background-color: #22252B !important;
    }
  `)

  // Editor's background
  addCSS(`
    .text-editor .CodeMirror-scrollbar-filler,
    .editor-helper, .text-editor .CodeMirror-gutters,
    .text-editor .CodeMirror-scroll {
      background-color: #282C34 !important;
    }
  `)

  // Search field
  addCSS(`
    .search-input,
    .replace-input,
    .CodeMirror-search-field {
      background-color: #1B1D23 !important;
      border-color: #181A1F !important;
    }
  `)

})()
