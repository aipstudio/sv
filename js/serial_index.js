function callback(data) {
  var arr_s = data.split('\n');
  arr_a = [];
  arr_s.forEach(function(item, i, arr_s) {
    if (item != '') {
      arr_a.push(a = item.split('|'));
    }
  });
  var q = '';
  var a = [];
  for (var i = 0; i < arr_a.length; i++) {
    if (i != arr_a.length - 1) {
      if (arr_a[i][0] != arr_a[i + 1][0]) {
        a.push(arr_a[i][0]);
      }
    } else {
      a.push(arr_a[i][0]);
    }
  }
  q = '<div class="row">';
  for (var j = 0; j < a.length; j++) {
    q = q + '<div class="col"><div class="card bg-dark">';
    q = q + '<a href="/' + arr_a[j][1] + '.html"><img src="image/' + arr_a[j][1] + '_prev.jpg" class="card-img-top" alt="' + arr_a[j][2] + '"></a>';
    q = q + '<div class="card-body"><h5 class="card-title">' + arr_a[j][2] + '</h5>';
    q = q + '<p class="card-text text-left">' + arr_a[j][3] + '</p></div></div><br></div>';
  }
  q = q + '</div>';
  $('#serial_list').append(q);
}

function set_list() {
  $.get(location.protocol + '//' + location.host + '/lists/serial.list',
    function(data) {
      callback(data);
    }
  );
}
