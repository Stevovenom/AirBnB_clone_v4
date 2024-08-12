$(document).ready(function() {
  let selectedAmenities = {}; // Object to store selected amenities
  
  // Function to update the amenities list
  function updateAmenities() {
    let amenitiesList = Object.values(selectedAmenities).join(', ');
    $('.amenities h4').text(amenitiesList);
  }

  // Event listener for checkbox changes
  $('input[type="checkbox"]').change(function() {
    let amenityId = $(this).data('id');
    let amenityName = $(this).data('name');

    if ($(this).is(':checked')) {
      selectedAmenities[amenityId] = amenityName;
    } else {
      delete selectedAmenities[amenityId];
    }
    
    updateAmenities();
  });
});
