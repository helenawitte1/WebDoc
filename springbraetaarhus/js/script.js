$(document).ready(function(){
    
    var getMax = function(){
        return $(document).height() - $(window).height();
    }
    
    var getValue = function(){
        return $(window).scrollTop();
    }
    
    if('max' in document.createElement('progress')){
        // Browser supports progress element
        var progressBar = $('progress');
        
        // Set the Max attr for the first time
        progressBar.attr({ max: getMax() });

        $(document).on('scroll', function(){
            // On scroll only Value attr needs to be calculated
            progressBar.attr({ value: getValue() });
        });
      
        $(window).resize(function(){
            // On resize, both Max/Value attr needs to be calculated
            progressBar.attr({ max: getMax(), value: getValue() });
        });   
    }
    else {
        var progressBar = $('.progress-bar'), 
            max = getMax(), 
            value, width;
        
        var getWidth = function(){
            // Calculate width in percentage
            value = getValue();            
            width = (value/max) * 100;
            width = width + '%';
            return width;
        }
        
        var setWidth = function(){
            progressBar.css({ width: getWidth() });
        }
        
        $(document).on('scroll', setWidth);
        $(window).on('resize', function(){
            // Need to reset the Max attr
            max = getMax();
            setWidth();
        });
    }
});



window.onscroll = function()
{
    var blooper = document.getElementById("myVideo");    
    
    
    if(blooper.getBoundingClientRect().bottom < 200 || blooper.getBoundingClientRect().top > 200)
       blooper.pause();   
   else  
       blooper.play();

} 

function myfunktion(){
    
    var e1 = document.getElementById("item1");
    
    e1.textContent = " shalalalalal ";
    
    
}

window.onload = function () {

    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        theme: "light2",
        title:{
            text: "Unge med behov for STU i Midtjylland"
        },
        axisY:{
            includeZero: false,
            valueFormatString:"####",
        },
        axisX:{
               valueFormatString:"####",
            },
        data: [{        
            type: "line",
            lineColor:"green",
            markerType:"none", 
            lineThickness: 5,
            yValueFormatString: "$####.00",      
            dataPoints: [
                { x: 2007, y: 82 },
                { x: 2008, y: 220 },
                { x: 2009, y: 411 },
                { x: 2010, y: 596 },
                { x: 2011, y: 711 },
                { x: 2012, y: 748 },
                { x: 2013, y: 874 },
                { x: 2014, y: 1001 },
                { x: 2015, y: 1114 },
                { x: 2016, y: 1198 },
                { x: 2017, y: 1325 },
            
            ]
        }]
    });
    chart.render();
    
    }