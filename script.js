$(document).ready(function() {
  $.getJSON( "/data.json", function( data ) {
    // Load the templates from the script tags on the page
    var template = $('#categoryTemplate').html();
    Mustache.parse(template);
    var itemsTemplate = $('#itemsTemplate').html();
    Mustache.parse(itemsTemplate);

    // Look at the selected categories and filter down the items as needed
    function submitCategories() {
      var selected = $('.categoryCheckbox:checked');
      if (selected.length < 1) {
        // If no categories selected, do nothing
        return;
      }

      // Gets a list of category codes from the selected checkboxes
      var selectedCategories = _.pluck(selected, 'value');

      // Gets only the items from data.json with an overlapping category with
      // those selected.
      var relevantItems = _.filter(data.items, function(i) {
        return !_.isEmpty(_.intersection(i.categories, selectedCategories));
      });

      // Renders the results
      var itemsRendered = Mustache.render(itemsTemplate, {'items': relevantItems});
      $('#hook').html(itemsRendered);
      $('#reset').click(showCategories);
    }

    // Show the list of available categories for selection
    function showCategories() {
      // Renders the category list
      var rendered = Mustache.render(template, data);
      $('#hook').html(rendered);
      $('#submitCategories').click(submitCategories);
    }

    // Start by showing the category list
    showCategories();

  });
});