var str = location.href;
var serial_dir = str.substring(str.lastIndexOf('/') + 1, str.lastIndexOf('.html'));
var serial_name = '';
var cook_seria = serial_dir + '_seria';
var cur_seria;
var arr_a = [];

function get_serial_name() {
  $.get(location.protocol + '//' + location.host + '/lists/serial.list',
    function(data) {
      var arr_c = data.split('\n');
      arr_b = [];
      arr_c.forEach(function(item, i, arr_c) {
        arr_b.push(a = item.split('|'));
        if (arr_b[i][1] == serial_dir) {
          serial_name = arr_b[i][2];
          return;
        }
      })
      $('[id=serial_name]').text(serial_name);
      $('meta[name=description]').attr('content', serial_name);
      $('[id=serial_name][class=navbar-brand]').attr('href', '/' + serial_dir + '.html');
    })
}
get_serial_name();

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
  q = '<ul id="nav" class="navbar-nav">';
  for (var j = 0; j < a.length; j++) {
    q = q + '<li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Сезон ' + a[j] + '</a>';
    q = q + '<div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">';
    for (var i = 0; i < arr_a.length; i++) {
      if (arr_a[i][0] == j + 1) {
        q = q + '<a class="dropdown-item" onClick="set_seria(' + i + ')">Серия ' + arr_a[i][1] + '</a>';
      }
    }
    q = q + '</div></li>';
  }
  q = q + '</ul>';
  $('#nav').replaceWith(q);
  set_seria_();
}

function set_nav() {
  $.get(location.protocol + '//' + location.host + '/lists/' + serial_dir + '.list',
    function(data) {
      callback(data);
    }
  );
}

function set_seria(p1) {
  cur_seria = p1;
  $.cookie(cook_seria, cur_seria);
  if (cur_seria >= 0 && cur_seria <= arr_a.length - 1) {
    var cur_seria_str = 'video/' + serial_dir + '/s' + arr_a[cur_seria][0] + 'e' + arr_a[cur_seria][1] + '.mp4';
    //$('#id_video').replaceWith('<video id="id_video" preload="auto" controls> <source id="id_src" src="' + cur_seria_str + '"> </video>');
    $('#id_video').attr('poster', 'image/' + serial_dir + '_poster.jpg');
    $('#id_video').attr('src', cur_seria_str);
    $('#seria_name').text('Сезон ' + arr_a[cur_seria][0] + ' cерия ' + arr_a[cur_seria][1]);
    $('#seria_desc').text(arr_a[cur_seria][2]);
    $('#seria_desc2').text(arr_a[cur_seria][3]);
  } else if (cur_seria < 0) {
    cur_seria = 0;
  } else if (cur_seria > arr_a.length - 1) {
    cur_seria = arr_a.length - 1;
  }
}

function set_seria_() {
  if ($.cookie(cook_seria) == null) {
    $.cookie(cook_seria, 0);
  }
  p1 = Number($.cookie(cook_seria));
  set_seria(p1);
}

function next_click() {
  set_seria(cur_seria + 1);
}

function back_click() {
  set_seria(cur_seria - 1);
}
