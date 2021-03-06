import $ from 'jquery'
class RenderContent {
  renderHTML (result) {
    let htmlContent = ''
    htmlContent += '<article class="character-list" id="' + result.id + '">' +
            '<div class="character-img">' +
                '<img src="' + result.image + '" alt="' + result.name + '" width  />' +
                '<div class="character-title">' +
                    '<div class="character-name">' + result.name + '</div>' +
                    '<div class="character-desc"><p><span>id: </span><span class="character-id">' + result.id + '</span> - <span>Created </span><span class="character-age">' + this.calculateIDCreationDate(result.created) + ' years ago </span></div>' +
                '</div>' +
            '</div>' +
            '<div class="character-details">' +
                '<div class="character-attr">' +
                    '<span>Species </span>' +
                    '<p>' + result.status + '</p>' +
                '</div>' +
                '<div class="character-attr">' +
                    '<span>Status </span>' +
                    '<p>' + result.species + '</p>' +
                '</div>' +
                '<div class="character-attr">' +
                    '<span>Gender </span>' +
                    '<p>' + result.gender + '</p>' +
                '</div>' +
                '<div class="character-attr">' +
                    '<span>Origin </span>' +
                    '<p>' + result.origin.name + '</p>' +
                '</div>' +
                '<div class="character-attr">' +
                    '<span>Last Location </span>' +
                    '<p>' + result.location.name + '</p>' +
                '</div>' +
            '</div>' +
        '</article>'

    $('.character-card').append(htmlContent)
  }

  calculateIDCreationDate (creationDate) {
    return ((new Date() - new Date(creationDate)) / (1000 * 60 * 60 * 24 * 365)).toFixed(1)
  }
}
export { RenderContent }
