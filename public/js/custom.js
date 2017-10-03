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
function realtimeClockar() {
  document.getElementById("arcurrent").value = getTimeStamp();
  setTimeout("realtimeClockar()", 1000);
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

// 히든 테이블 - 관리자
$(document).ready(function() {
    var table = $('#hiddentable').DataTable( {
        lengthChange: false,
        buttons: [ 'excel', 'print', 'colvis' ]
    } );

    table.buttons().container()
        .appendTo( '#hiddentable_wrapper .col-sm-6:eq(0)' );
} );

// 신청 버튼 시간 제한
todayy = new Date();
c_time = leadingZeros(todayy.getHours(), 2) +
         leadingZeros(todayy.getMinutes(), 2);

if (c_time >=1700 && c_time <=2159)
{
  $("#submitbtn").show();
  $("#alertbtn").attr("disabled", true);
  $("#alertbtn").hide();
} else
{
  $("#alertbtn").show();
  $("#submitbtn").attr("disabled", true);
  $("#submitbtn").hide();
}

//ar 신청시 자동 현황 검색 기능
$(document).ready(function() {
  $(".search").ready(function () {
    var searchTerm = $(".search").val();
    var listItem = $('.results tbody').children('tr');
    var searchSplit = searchTerm.replace(/ /g, "'):containsi('")

  $.extend($.expr[':'], {'containsi': function(elem, i, match, array){
        return (elem.textContent || elem.innerText || '').toLowerCase().indexOf((match[3] || "").toLowerCase()) >= 0;
    }
  });

  $(".results tbody tr").not(":containsi('" + searchSplit + "')").each(function(e){
    $(this).attr('visible','false');
  });

  $(".results tbody tr:containsi('" + searchSplit + "')").each(function(e){
    $(this).attr('visible','true');
  });

  var jobCount = $('.results tbody tr[visible="true"]').length;
    $('.counter').text(jobCount + '개의 세미나실 데이터 검색됨');

  if(jobCount == '0') {$('.no-result').show();}
    else {$('.no-result').hide();}
		  });
});

// 중복 서브밋 방지
function setEvent(){
    $("#submitbtn").unbind("click").bind("click",function(){
        alert("신청되었습니다.");
    });
}
setEvent();
setEvent();

//엔터키 막기
$(function() { 
  $("input:text").keydown(function(evt) { 
    if (evt.keyCode == 13) 
    return false; 
  }); 
});