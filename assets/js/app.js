document.querySelector('.list-group li.disabled').disabled = true;

const addBtn = document.getElementById('add-another');
const deleteBtn = document.getElementById('delete-another');

function dataAppend() {
  const appendMore = document.getElementById('append-more');
  appendMore.innerHTML += `
  <hr>
    <div class="form-row">
      <div class="form-group col-md-6">
        <label for="">Medication</label>
        <input type="text" name="" class="form-control" placeholder="">
      </div>
    </div>
    <div class="form-row">
      <div class="form-group col-md-12">
        <label for="">Free Test SIG</label>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <button class="btn btn-primary" type="button" data-toggle="modal" data-target="#sig-test">
              <i class="fa fa-cog" aria-hidden="true"></i>
            </button>
          </div>
          <input type="text" name="" id="getValueFromModal" class="form-control" placeholder="">
        </div>
      </div>
      <!-- col -->
      <div class="form-group col-md-6">
        <label for="inputEmail4">Dispense</label>
        <input type="text" name="" class="form-control" placeholder="">
      </div>
      <!-- col -->
      <div class="form-group col-md-6">
        <label for="inputPassword4">Refill</label>
        <input type="text" name="" class="form-control" placeholder="">
      </div>
      <!-- col -->
      <div class="form-group col-md-12">
        <div class="custom-control custom-checkbox custom-control-inline">
          <input type="checkbox" class="custom-control-input" id="customCheck1">
          <label class="custom-control-label" for="customCheck1">Dispense as Written</label>
        </div>
        <div class="custom-control custom-checkbox custom-control-inline">
          <input type="checkbox" class="custom-control-input" id="customCheck2">
          <label class="custom-control-label" for="customCheck2">Add to Favorites</label>
        </div>
        <div class="custom-control custom-checkbox custom-control-inline">
          <input type="checkbox" class="custom-control-input" id="customCheck3">
          <label class="custom-control-label" for="customCheck3">
            Add to Medication List <i class="fa fa-info-circle text-dark" aria-hidden="true"></i>
          </label>
        </div>
      </div>
      <!-- col -->
      <div class="form-group col-md-12">
        <label for="">
          <i class="fa fa-sticky-note text-dark" aria-hidden="true"></i> Note To Pharmacy
        </label>
        <input type="text" name="" class="form-control" placeholder="">
      </div>
    </div>
    <!-- row -->
  `;
  deleteBtn.style.display = 'block';
}

function dataDelete() {
  const appendMore = document.getElementById('append-more');
  appendMore.innerHTML = '';
  deleteBtn.style.display = 'none';
}

addBtn.addEventListener('click', dataAppend);
deleteBtn.addEventListener('click', dataDelete);


$dose = '';
$unit = '';
$route = '';
$freq = '';
$dir = '';
$dur = '';

$("#dose li.idx-1").click(function () {
  $dose = $(this).html();
  $(".idx-1").removeClass("active");
  $(this).addClass("active");
  return $dose;
});
$("#unit li.idx-2").click(function () {
  $unit = $(this).html();
  $(".idx-2").removeClass("active");
  $(this).addClass("active");
  return $unit;
});
$("#route li.idx-3").click(function () {
  $route = $(this).html();
  $(".idx-3").removeClass("active");
  $(this).addClass("active");
  return $route;
});
$("#frequency li.idx-4").click(function () {
  $freq = $(this).html();
  $(".idx-4").removeClass("active");
  $(this).addClass("active");
  return $freq;
});
$("#direction li.idx-5").click(function () {
  $dir = $(this).html();
  $(".idx-5").removeClass("active");
  $(this).addClass("active");
  return $dir;
});
$("#duration li.idx-6").click(function () {
  $dur = $(this).html();
  $(".idx-6").removeClass("active");
  $(this).addClass("active");
  return $dur;
});

$("#add-item").click(function () {

  function filter_array(test_array) {
    let index = -1,
      arr_length = test_array ? test_array.length : 0,
      resIndex = -1,
      result = [];
    while (++index < arr_length) {
      let value = test_array[index];
      if (value) {
        result[++resIndex] = value;
      }
    }
    return result;
  }

  let values = [$dose, $unit, $route, $freq, $dir, $dur];
  $("#getValueFromModal").val(filter_array(values).join(', '));
});
