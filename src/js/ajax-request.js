import $ from 'jquery'
import { RenderContent } from './render-content'
export default class AjaxRequest {
  ajaxCall (url) {
    $.ajax({
      type: 'GET',
      url: url,
      cache: false,
      success: function (data) {
        const apiResults = data.results
        if (apiResults.length) {
          apiResults.forEach(function (result, index) {
            const renderContent = new RenderContent(result)
            renderContent.renderHTML(result)
          })
        }
      },
      error: function (data) {
        console.log('Error: ' + data)
      }
    })
  }
}
