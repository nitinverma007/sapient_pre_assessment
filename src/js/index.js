import '../scss/style.scss'
import $ from 'jquery'
import AjaxRequest from './ajax-request'

$(document).ready(() => {
  const url = 'https://rickandmortyapi.com/api/character/?'

  const ajaxCalling = new AjaxRequest()
  ajaxCalling.ajaxCall(url)

  $('.search-by-name').on('submit', function (e) {
    e.preventDefault()
    $('.character-card').empty()
    $('.selected-filters').empty()
    const selectedKey = $(this).find("input[type='search']").attr('name')
    const selectedValue = $(this).find("input[type='search']").val()
    const dataParam = selectedKey + '=' + selectedValue
    ajaxCalling.ajaxCall(url + dataParam)
  })

  $(document).on('change', 'input[type="checkbox"]', function (e) {
    e.preventDefault()
    $('.character-card').empty()
    $('.selected-filters').empty()
    let dataArray = []
    $('input:checked').each(function (i, el) {
      const selectedKey = $(el).parents('.filters-body').find('h3').text()
      const selectedValue = $(el).val()
      $('.selected-filters').append('<span>' + selectedValue + ' X</span>')
      dataArray += [selectedKey] + '=' + selectedValue + '&'
    })
    dataArray = dataArray.slice(0, -1)
    ajaxCalling.ajaxCall(url + dataArray)
  })

  $('select[name="sorting"]').on('change', function (e) {
    e.preventDefault()
    if ($(this).find(':selected').val() === 'ascending') {
      $('.character-card .character-list').sort(function (a, b) {
        return parseInt(a.id) - parseInt(b.id)
      }).each(function () {
        const elem = $(this)
        elem.remove()
        $(elem).appendTo('.character-card')
      })
    } else {
      $('.character-card .character-list').sort(function (a, b) {
        return parseInt(b.id) - parseInt(a.id)
      }).each(function () {
        const elem = $(this)
        elem.remove()
        $(elem).appendTo('.character-card')
      })
    }
  })
})
