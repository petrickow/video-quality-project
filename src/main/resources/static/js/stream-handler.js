var input = "<rte>";
input += "<rtept lat=\"49.488449\" lon=\"8.45795854\" speed=\"0.75\" acc=\"5.0\"/>";
input += "<rtept lat=\"49.48845729\" lon=\"8.45795141\" speed=\"0.75\" acc=\"5.0\"/>";
input += "<rtept lat=\"49.48846988\" lon=\"8.45796832\" speed=\"0.75\" acc=\"5.0\"/>";
input += "<rtept lat=\"49.48847321\" lon=\"8.45800525\" speed=\"0.75\" acc=\"6.0\"/>";
input += "<rtept lat=\"49.48846734\" lon=\"8.45802574\" speed=\"0.5\" acc=\"6.0\"/>";
input += "<rtept lat=\"49.48846965\" lon=\"8.45804824\" speed=\"0.75\" acc=\"7.0\"/>";
input += "<rtept lat=\"49.48846868\" lon=\"8.45806656\" speed=\"1.25\" acc=\"8.0\"/>";
input += "<rtept lat=\"49.48846467\" lon=\"8.45807954\" speed=\"1.0\" acc=\"9.0\"/>";
input += "<rtept lat=\"49.48846148\" lon=\"8.45809259\" speed=\"0.75\" acc=\"9.0\"/>";
input += "<rtept lat=\"49.48846562\" lon=\"8.45811175\" speed=\"1.3462912\" acc=\"10.0\"/>";
input += "<rtept lat=\"49.48847953\" lon=\"8.45812785\" speed=\"1.25\" acc=\"10.0\"/>";
input += "<rtept lat=\"49.48850007\" lon=\"8.45813791\" speed=\"1.0\" acc=\"11.0\"/>";
input += "<rtept lat=\"49.48851293\" lon=\"8.45814636\" speed=\"1.25\" acc=\"11.0\"/>";
input += "<rtept lat=\"49.48852568\" lon=\"8.45815211\" speed=\"1.0\" acc=\"11.0\"/>";
input += "<rtept lat=\"49.48854263\" lon=\"8.45815314\" speed=\"1.25\" acc=\"10.0\"/>";
input += "<rtept lat=\"49.488556\" lon=\"8.45816263\" speed=\"1.0\" acc=\"9.0\"/>";
input += "<rtept lat=\"49.48856852\" lon=\"8.45817296\" speed=\"1.0\" acc=\"9.0\"/>";
input += "<rtept lat=\"49.48857918\" lon=\"8.45818892\" speed=\"1.25\" acc=\"9.0\"/>";
input += "<rtept lat=\"49.48858852\" lon=\"8.4582059\" speed=\"1.0\" acc=\"8.0\"/>";
input += "<rtept lat=\"49.48858689\" lon=\"8.45822865\" speed=\"1.25\" acc=\"6.0\"/>";
input += "<rtept lat=\"49.48859054\" lon=\"8.45825344\" speed=\"1.6007811\" acc=\"5.0\"/>";
input += "<rtept lat=\"49.48859195\" lon=\"8.45827592\" speed=\"1.3462912\" acc=\"5.0\"/>";
input += "<rtept lat=\"49.48859926\" lon=\"8.45830755\" speed=\"1.25\" acc=\"7.0\"/>";
input += "<rtept lat=\"49.48860432\" lon=\"8.45832644\" speed=\"1.25\" acc=\"6.0\"/>";
input += "<rtept lat=\"49.48860472\" lon=\"8.45834161\" speed=\"1.25\" acc=\"5.0\"/>";
input += "<rtept lat=\"49.48860655\" lon=\"8.4583629\" speed=\"1.25\" acc=\"5.0\"/>";
input += "<rtept lat=\"49.48860295\" lon=\"8.45837978\" speed=\"1.25\" acc=\"4.0\"/>";
input += "<rtept lat=\"49.48859648\" lon=\"8.45840108\" speed=\"1.25\" acc=\"4.0\"/>";
input += "<rtept lat=\"49.48858995\" lon=\"8.45842684\" speed=\"1.3462912\" acc=\"3.0\"/>";
input += "<rtept lat=\"49.48858627\" lon=\"8.45843992\" speed=\"1.6007811\" acc=\"3.0\"/>";
input += "<rtept lat=\"49.48858321\" lon=\"8.4584532\" speed=\"1.8027756\" acc=\"3.0\"/>";
input += "<rtept lat=\"49.48857977\" lon=\"8.45846642\" speed=\"1.4142135\" acc=\"3.0\"/>";
input += "<rtept lat=\"49.4885729\" lon=\"8.45848819\" speed=\"1.25\" acc=\"3.0\"/>";
input += "<rtept lat=\"49.48856608\" lon=\"8.45850648\" speed=\"0.75\" acc=\"4.0\"/>";
input += "<rtept lat=\"49.48856219\" lon=\"8.45852014\" speed=\"1.3462912\" acc=\"4.0\"/>";
input += "<rtept lat=\"49.48855614\" lon=\"8.45853073\" speed=\"1.6007811\" acc=\"4.0\"/>";
input += "<rtept lat=\"49.48855172\" lon=\"8.45854332\" speed=\"1.25\" acc=\"4.0\"/>";
input += "<rtept lat=\"49.48854671\" lon=\"8.4585597\" speed=\"1.6007811\" acc=\"4.0\"/>";
input += "<rtept lat=\"49.48853977\" lon=\"8.45856966\" speed=\"1.4142135\" acc=\"4.0\"/>";
input += "<rtept lat=\"49.4885351\" lon=\"8.45858933\" speed=\"1.6007811\" acc=\"4.0\"/>";
input += "<rtept lat=\"49.48852892\" lon=\"8.45859949\" speed=\"1.0\" acc=\"5.0\"/>";
input += "<rtept lat=\"49.48852437\" lon=\"8.45861264\" speed=\"0.75\" acc=\"5.0\"/>";
input += "<rtept lat=\"49.48851992\" lon=\"8.45862653\" speed=\"1.0\" acc=\"6.0\"/>";
input += "<rtept lat=\"49.48851614\" lon=\"8.45864006\" speed=\"1.0\" acc=\"5.0\"/>";
input += "<rtept lat=\"49.48850873\" lon=\"8.45866455\" speed=\"1.118034\" acc=\"5.0\"/>";
input += "<rtept lat=\"49.48850218\" lon=\"8.45868691\" speed=\"0.75\" acc=\"5.0\"/>";
input += "</rte>";

app.controller('StreamHandler', [
    'Socket',
    function (Socket) {
        "use strict";
        this.messages = Socket.messages;
    //'function(){
    //this.parser = new DOMParser();
    //this.data =       this.parser.parseFromString(input,"text/xml");
        this.getData = function () {
        //alert("Testdata: "+ this.data.getElementsByTagName('rtept')[0].getAttribute('lat'));
            console.log(this.messages);
            //alert("Testdata: ");
            alert("Testdata: " + Socket.messages);
        };
    }]);

/*app.controller('StreamHandler', function() {
});*/