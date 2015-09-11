/* jshint devel:false */
'use strict';

$( document ).ready( function() {

    var table_kick = new Howl({
      urls: ['../sound/table_kick/table_kick.mp3', '../sound/table_kick/table_kick.ogg'],
      autoplay: false,
      loop: false,
      onend: function() {
        console.log('table_kick finished!');
      }
    });

    var abduction = new Howl({
      urls: ['../sound/abduction/abduction.mp3', '../sound/abduction/abduction.ogg'],
      autoplay: false,
      loop: false,
      onend: function() {
        console.log('abduction finished!');
      }
    });

    var troll_roar = new Howl({
      urls: ['../sound/troll_roar/troll_roar.mp3', '../sound/troll_roar/troll_roar.ogg'],
      autoplay: false,
      loop: false,
      onend: function() {
        console.log('troll_roar finished!');
      }
    });

    var banner_fly = new Howl({
      urls: ['../sound/banner_fly/banner_fly.mp3', '../sound/banner_fly/banner_fly.ogg'],
      autoplay: false,
      loop: false,
      onend: function() {
        console.log('banner_fly finished!');
      }
    });

    var banner_throw = new Howl({
      urls: ['../sound/banner_throw/banner_throw.mp3', '../sound/banner_throw/banner_throw.ogg'],
      autoplay: false,
      loop: false,
      onend: function() {
        banner_fly.play();
        console.log('banner_throw finished!');
      }
    });

    var running = new Howl({
      urls: ['../sound/running/running.mp3', '../sound/running/running.ogg'],
      autoplay: false,
      loop: false,
      onend: function() {
        console.log('running finished!');
      }
    });

    var portal_open = new Howl({
      urls: ['../sound/portal_open/portal_open.mp3', '../sound/portal_open/portal_open.ogg'],
      autoplay: false,
      loop: false,
      onend: function() {
        console.log('portal_open finished!');
      }
    });

    var moto = new Howl({
      urls: ['../sound/moto/moto.mp3', '../sound/moto/moto.ogg'],
      autoplay: false,
      loop: false,
      onend: function() {
        console.log('moto finished!');
      }
    });

    var bike_fly = new Howl({
      urls: ['../sound/bike_fly/bike_fly.mp3', '../sound/bike_fly/bike_fly.ogg'],
      autoplay: false,
      loop: false,
      onend: function() {
        console.log('bike_fly finished!');
      }
    });

    var troll_roar_2 = new Howl({
      urls: ['../sound/troll_roar_2/troll_roar_2.mp3', '../sound/troll_roar_2/troll_roar_2.ogg'],
      autoplay: false,
      loop: false,
      onend: function() {
        console.log('troll_roar_2 finished!');
      }
    });

    var dragon_roar = new Howl({
      urls: ['../sound/dragon_roar/dragon_roar.mp3', '../sound/dragon_roar/dragon_roar.ogg'],
      autoplay: false,
      loop: false,
      onend: function() {
        console.log('dragon_roar finished!');
      }
    });

    var fingers_click = new Howl({
      urls: ['../sound/fingers_click/fingers_click.mp3', '../sound/fingers_click/fingers_click.ogg'],
      autoplay: false,
      loop: false,
      onend: function() {
        dragon_roar.play();
        console.log('fingers_click finished!');
      }
    });

    $( '#fullpage' ).fullpage({
      css3: true
    , fixedElements: '#header'
    , loopBottom: false
    , loopTop: false
    , verticalCentered: true
    , scrollOverflow: true
    , afterLoad: function( anchorLink, index ){
        console.log( 'slide ' + index );
        switch ( index ) {
          case 1:
            // console.log('#layer-4: ' + $('#layer-4').toggleClass('hide show').attr('class'));
            break;
          case 2:
            // console.log('#layer-5: ' + $('#layer-5').toggleClass('hide show').attr('class'));
            break;
          case 3:
            table_kick.play();
            break;
          case 4:
            abduction.play();
            break;
          case 5:
            // console.log('#layer-8, #layer-2: ' + $('#layer-8, #layer-2').toggleClass('hide show').attr('class'));
            $('#layer-6-5').removeClass('visible').addClass('invisible');
            $('#layer-6-4').removeClass('invisible').addClass('visible');
            break;
          case 6:
            // console.log('#layer-9, #layer-3: ' + $('#layer-9, #layer-3').toggleClass('hide show').attr('class'));
            setTimeout( function(){
              $('#layer-6-5').removeClass('invisible').addClass('visible');
              $('#layer-6-4').removeClass('visible').addClass('invisible');
            }, 500);
            $('#layer-7-3').removeClass('push-center').addClass('push-bottom');
            break;
          case 7:
            $('#layer-6-5').removeClass('visible').addClass('invisible');
            $('#layer-6-4').removeClass('invisible').addClass('visible');
            setTimeout( function(){
              $('#layer-7-3').removeClass('push-bottom').addClass('push-center');
            }, 500);
            break;
          case 8:
            troll_roar.play();
            $('#layer-7-3, #layer-9-5').removeClass('push-center').addClass('push-bottom');
            $('#layer-9-3').removeClass('invisible').addClass('visible');
            $('#layer-9-6').removeClass('visible').addClass('invisible');
            break;
          case 9:
            // console.log('#layer-12, #layer-6: ' + $('#layer-12, #layer-6').toggleClass('hide show').attr('class'));
            banner_throw.play();
            running.stop();
            setTimeout( function(){
              $('#layer-9-5').removeClass('push-bottom').addClass('push-center');
              setTimeout( function(){
                $('#layer-9-6').removeClass('invisible').addClass('visible');
                $('#layer-9-3').removeClass('visible').addClass('invisible');
              }, 500);    
            }, 500);
            break;
          case 10:
            // console.log('#layer-13, #layer-7: ' + $('#layer-13, #layer-7').toggleClass('hide show').attr('class'));
            running.play();
            $('#layer-9-5').removeClass('push-center').addClass('push-bottom');
            $('#layer-9-3').removeClass('invisible').addClass('visible');
            $('#layer-9-6').removeClass('visible').addClass('invisible');
            break;
          case 11:
            // console.log('#layer-14, #layer-8: ' + $('#layer-14, #layer-8').toggleClass('hide show').attr('class'));
            running.stop();
            portal_open.play();
            break;
          case 12:
            // console.log('#layer-15, #layer-9: ' + $('#layer-15, #layer-9').toggleClass('hide show').attr('class'));
            moto.play();
            break;
          case 13:
            // console.log('#layer-16, #layer-1: 0' + $('#layer-16, #layer-10').toggleClass('hide show').attr('class'));
            break;
          case 14:
            // console.log('#layer-17, #layer-1: 1' + $('#layer-17, #layer-11').toggleClass('hide show').attr('class'));
            break;
          case 15:
            // console.log('#layer-18, #layer-1: 2' + $('#layer-18, #layer-12').toggleClass('hide show').attr('class'));
            bike_fly.play();
            break;
          case 16:
            // console.log('#layer-19, #layer-1: 3' + $('#layer-19, #layer-13').toggleClass('hide show').attr('class'));
            troll_roar_2.play();
            break;
          case 17:
            break;
          case 18:
            fingers_click.play();
            break;
          case 19:
            break;
        }
      }
    });

    $('[data-toggle="tooltip"]').tooltip();

    var theme = new Howl({
      urls: ['../sound/theme/theme.mp3', '../sound/theme/theme.ogg'],
      autoplay: true,
      loop: true,
      onend: function() {
        console.log('Finished!');
      }
    });

    $( '.mute-off, .mute-on' ).click( function() {
      $( '.mute-off, .mute-on' ).toggleClass('hide show');
      if ( $( this ).hasClass( 'mute-off' ) ) {
        console.log('mute-off');
        theme.pause();
      } else {
        console.log('mute-on');
        theme.play();
      }
    });

    $( '#layer-4, #layer-5, #layer-14, #layer-18' ).parallax({
      calibrateX: false,
      calibrateY: true,
      invertX: false,
      invertY: true,
      limitX: false,
      limitY: 10,
      scalarX: 2,
      scalarY: 8,
      frictionX: 0.2,
      frictionY: 0.8,
      originX: 0.0,
      originY: 1.0
    });
});