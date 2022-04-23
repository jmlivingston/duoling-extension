function addGoogleTranslateScript() {
  const script = document.createElement('script')
  script.type = 'text/javascript'
  script.src =
    '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
  document.head.appendChild(script)
}

function addCustomStyling() {
  const style = document.createElement('style')
  style.innerHTML = '.skiptranslate { display: none; }'
  document.head.appendChild(style)
}

function addMeaningColumn() {
  const table = document.querySelector('table')
  const googleTranslate = document.createElement('div')
  googleTranslate.id = 'google_translate_element'
  googleTranslate.style.display = 'none'
  table.parentNode.insertBefore(googleTranslate, table)

  const firstTh = table.querySelector('th')
  const secondTh = document.createElement('th')
  secondTh.innerHTML = 'Meaning'
  firstTh.parentNode.insertBefore(secondTh, firstTh.nextSibling)

  const rows = document.querySelectorAll('table tbody tr')
  rows.forEach((row) => {
    const firstTd = row.querySelector('td')
    firstTd.classList.add('notranslate')
    const secondTd = document.createElement('td')
    secondTd.classList.add('translate')
    secondTd.innerHTML = firstTd.innerHTML
    firstTd.parentNode.insertBefore(secondTd, firstTd.nextSibling)
  })
}

function initiateGoogleTranslate() {
  const language = document
    .querySelector('h1')
    .innerHTML.replace('words learned', '')
    .trim()
    .toUpperCase()
  const LANGUAGES = {
    ENGLISH: 'en',
    JAPANESE: 'ja',
    SPANISH: 'es',
  }
  new google.translate.TranslateElement(
    {
      autoDisplay: false,
      layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
      pageLanguage: LANGUAGES[language],
      includedLanguages: LANGUAGES.ENGLISH,
    },
    'google_translate_element'
  )
}

function addDownloadButton() {
  const csv =
    'word,meaning\n' +
    Array.from(document.querySelectorAll('tbody tr'))
      .map((tr) => {
        const tds = Array.from(tr.querySelectorAll('td'))
        return `${tds[0].textContent},${tds[1].textContent}`
      })
      .join('\r')

  const headerSpan = document.querySelector('h1 + span')
  const downloadLink = document.createElement('a')
  downloadLink.setAttribute(
    'download',
    `duo-lingo-csv-${new Date().toISOString().substr(0, 10)}.csv`
  )
  downloadLink.innerHTML = 'Download CSV'
  downloadLink.href = 'data:text/csv;charset=utf-8;base64,' + btoa(csv)
  headerSpan.parentNode.insertBefore(downloadLink, headerSpan.nextSibling)
}

addGoogleTranslateScript()
addCustomStyling()
addMeaningColumn()
setTimeout(initiateGoogleTranslate, 1000)
setTimeout(addDownloadButton, 1500)
