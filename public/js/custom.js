/*!
 * Start Bootstrap - SB Admin 2 v3.3.7+1 (http://startbootstrap.com/template-overviews/sb-admin-2)
 * Copyright 2013-2016 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap/blob/gh-pages/LICENSE)
 */

$(function() {
    $('#side-menu').metisMenu();
});

//Loads the correct sidebar on window load,
//collapses the sidebar on window resize.
// Sets the min-height of #page-wrapper to window size
$(function() {
    $(window).bind("load resize", function() {
        var topOffset = 50;
        var width = (this.window.innerWidth > 0) ? this.window.innerWidth : this.screen.width;
        if (width < 768) {
            $('div.navbar-collapse').addClass('collapse');
            topOffset = 100; // 2-row-menu
        } else {
            $('div.navbar-collapse').removeClass('collapse');
        }

        var height = ((this.window.innerHeight > 0) ? this.window.innerHeight : this.screen.height) - 1;
        height = height - topOffset;
        if (height < 1) height = 1;
        if (height > topOffset) {
            $("#page-wrapper").css("min-height", (height) + "px");
        }
    });

    var url = window.location;
    // var element = $('ul.nav a').filter(function() {
    //     return this.href == url;
    // }).addClass('active').parent().parent().addClass('in').parent();
    var element = $('ul.nav a').filter(function() {
        return this.href == url;
    }).addClass('active').parent();

    while (true) {
        if (element.is('li')) {
            element = element.parent().addClass('in').parent();
        } else {
            break;
        }
    }
});

//아래는 오늘 날짜/시간 구현 코드 시작op
function realtimeClockop() {
  document.getElementById("opcurrent").value = getTimeStamp();
  setTimeout("realtimeClockop()", 1000);
}

function getTimeStamp() {
  var d = new Date();
  var s =
    leadingZeros(d.getHours(), 2) +
    leadingZeros(d.getMinutes(), 2) +
    leadingZeros(d.getSeconds(), 2);
  return s;
}

function leadingZeros(n, digits) {
  var zero = '';
  n = n.toString();

  if (n.length < digits) {
    for (i = 0; i < digits - n.length; i++)
      zero += '0';
  }
  return zero + n;
}

//아래는 오늘 날짜/시간 구현 코드 시작ar
function realtimeClocktwoone() {
  document.getElementById("artwoonecurrent").value = getTimeStamp();
  setTimeout("realtimeClocktwoone()", 1000);
}

function getTimeStamp() {
  var d = new Date();
  var s =
    leadingZeros(d.getHours(), 2) +
    leadingZeros(d.getMinutes(), 2) +
    leadingZeros(d.getSeconds(), 2);
  return s;
}

function leadingZeros(n, digits) {
  var zero = '';
  n = n.toString();

  if (n.length < digits) {
    for (i = 0; i < digits - n.length; i++)
      zero += '0';
  }
  return zero + n;
}

//아래는 오늘 날짜/시간 구현 코드 시작
function realtimeClocktwotwo() {
  document.getElementById("artwotwocurrent").value = getTimeStamp();
  setTimeout("realtimeClocktwotwo()", 1000);
}

function getTimeStamp() {
  var d = new Date();
  var s =
    leadingZeros(d.getHours(), 2) +
    leadingZeros(d.getMinutes(), 2) +
    leadingZeros(d.getSeconds(), 2);
  return s;
}

function leadingZeros(n, digits) {
  var zero = '';
  n = n.toString();

  if (n.length < digits) {
    for (i = 0; i < digits - n.length; i++)
      zero += '0';
  }
  return zero + n;
}

//아래는 오늘 날짜/시간 구현 코드 시작
function realtimeClocktwothree() {
  document.getElementById("artwothreecurrent").value = getTimeStamp();
  setTimeout("realtimeClocktwothree()", 1000);
}

function getTimeStamp() {
  var d = new Date();
  var s =
    leadingZeros(d.getHours(), 2) +
    leadingZeros(d.getMinutes(), 2) +
    leadingZeros(d.getSeconds(), 2);
  return s;
}

function leadingZeros(n, digits) {
  var zero = '';
  n = n.toString();

  if (n.length < digits) {
    for (i = 0; i < digits - n.length; i++)
      zero += '0';
  }
  return zero + n;
}

//아래는 오늘 날짜/시간 구현 코드 시작
function realtimeClocktwofour() {
  document.getElementById("artwofourcurrent").value = getTimeStamp();
  setTimeout("realtimeClocktwofour()", 1000);
}

function getTimeStamp() {
  var d = new Date();
  var s =
    leadingZeros(d.getHours(), 2) +
    leadingZeros(d.getMinutes(), 2) +
    leadingZeros(d.getSeconds(), 2);
  return s;
}

function leadingZeros(n, digits) {
  var zero = '';
  n = n.toString();

  if (n.length < digits) {
    for (i = 0; i < digits - n.length; i++)
      zero += '0';
  }
  return zero + n;
}

//아래는 오늘 날짜/시간 구현 코드 시작
function realtimeClocktwofive() {
  document.getElementById("artwofivecurrent").value = getTimeStamp();
  setTimeout("realtimeClocktwofive()", 1000);
}

function getTimeStamp() {
  var d = new Date();
  var s =
    leadingZeros(d.getHours(), 2) +
    leadingZeros(d.getMinutes(), 2) +
    leadingZeros(d.getSeconds(), 2);
  return s;
}

function leadingZeros(n, digits) {
  var zero = '';
  n = n.toString();

  if (n.length < digits) {
    for (i = 0; i < digits - n.length; i++)
      zero += '0';
  }
  return zero + n;
}

//아래는 오늘 날짜/시간 구현 코드 시작
function realtimeClocktwosix() {
  document.getElementById("artwosixcurrent").value = getTimeStamp();
  setTimeout("realtimeClocktwosix()", 1000);
}

function getTimeStamp() {
  var d = new Date();
  var s =
    leadingZeros(d.getHours(), 2) +
    leadingZeros(d.getMinutes(), 2) +
    leadingZeros(d.getSeconds(), 2);
  return s;
}

function leadingZeros(n, digits) {
  var zero = '';
  n = n.toString();

  if (n.length < digits) {
    for (i = 0; i < digits - n.length; i++)
      zero += '0';
  }
  return zero + n;
}

//아래는 오늘 날짜/시간 구현 코드 시작
function realtimeClockorchestra() {
  document.getElementById("arorchestracurrent").value = getTimeStamp();
  setTimeout("realtimeClockorchestra()", 1000);
}

function getTimeStamp() {
  var d = new Date();
  var s =
    leadingZeros(d.getHours(), 2) +
    leadingZeros(d.getMinutes(), 2) +
    leadingZeros(d.getSeconds(), 2);
  return s;
}

function leadingZeros(n, digits) {
  var zero = '';
  n = n.toString();

  if (n.length < digits) {
    for (i = 0; i < digits - n.length; i++)
      zero += '0';
  }
  return zero + n;
}

// 테이블
$(document).ready(function() {
    $('#enrolltable').DataTable( {
        "order": [[ 0, "asc" ]]
    } );
    $('table.display').DataTable();
} );

// 히든 테이블
$(document).ready(function() {
    var table = $('#hiddentable').DataTable( {
        lengthChange: false,
        buttons: [ 'excel', 'print', 'colvis' ]
    } );

    table.buttons().container()
        .appendTo( '#hiddentable_wrapper .col-sm-6:eq(0)' );
} );

//2-1신청 테이블


// 신청 수정 버튼
todayy = new Date();
c_time = leadingZeros(todayy.getHours(), 2) +
         leadingZeros(todayy.getMinutes(), 2);

if (c_time >=1000 && c_time <=2159)
{
  $("#submitbtn").show();
  $("#alertbtn").hide();
} else
{
  $("#submitbtn").hide();
  $("#alertbtn").show();
}
