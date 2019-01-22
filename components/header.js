// header component

const html = require('choo/html')

module.exports = () => {
  return html`
    <div class="tc vh-100 w-100 dt">
      <div class="dtc v-mid">
        <img src="assets/img/rlscrapper.svg" class="w-50 w-third-m w-25-l bt b--red br-pill shadow-2">
        <h1 class="f3 f2-m f1-l mt4"><span class="bg-red near-black ph3">rlspain.cf</span></h1>
      </div>
    </div>
  `
}