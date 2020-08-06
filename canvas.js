Pts.namespace(window);
var space;
var pts = [];
function spaceTravel() {
    var colours = {
        SPACE: "#000000",
        STARS: "#FFFFFF",
    };
    
    space = new CanvasSpace("canvas");
    space.autoResize = true;

    var env = {
        starCount:150,
        center:space.size.$divide(1.9),
        height:window.innerHeight,
        width:window.innerWidth
    }
    var form = space.getForm();  
    space.setup({
        bgcolor:colours.SPACE
    });

    // 
    for(let i =0 ; i < env.starCount; i++){
        pts.push(new Pt());
        pts[i].fill(colours.STARS);
        pts[i].to({x:env.width * Math.random(),y:env.height * Math.random()})
    }


    space.add(
        {
            animate:(time,fps,context)=>{
                //
                for(var i = 0; i < env.starCount; i++){
                    var pt = pts[i];
                    form.stroke(false).fill(colours.STARS).point(pt,1);
                }
            }
        }
    );

    space.play();



  }



window.onload = () => {
  spaceTravel();
};

window.onresize = ()=>{
    space.removeAll();
    document.querySelector('canvas').remove();
    spaceTravel();
}

