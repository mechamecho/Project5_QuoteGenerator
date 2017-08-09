/*global $*/
$("document").ready(function(){
    var allQuotes=[{quote:"Me, miss? Not by a long shot.",  author:"Caitlyn"},
    {quote:"All the world on one arrow.",  author:"Ashe"},
    {quote:"Embracing life means accepting death.",  author:"Kindred/Lamb"},
    {quote:"What doesn't kill you just isn't finished yet.",  author:"Twitch"},
    {quote:"My genius will be understood - eventually.",  author:"Jhin"},
    {quote:"I accidentally did that on purpose.",  author:"Jinx"},
    {quote:"A bird's eye view is the best advantage.",  author:"Quinn"},
    {quote:"Yup, that tasted purple.",  author:"Lulu"},
    {quote:"The dark should fear me.",  author:"Vayne"},
    {quote:"Never underestimate the power of the Scout's code.",  author:"Teemo"},
    {quote: "Shagdovala!",  author:"Gnar"},
    {quote:"It's not how much time you have, it's how you use it.",  author:"Ekko"},
    {quote: "Anger gives motivation without purpose.",  author:"Master Yi"},
    {quote:"It's all skill!",  author:"Ezreal"},
    {quote:"They will know serenity.",  author:"Soraka"},
    {quote:"People keep running into my blade.",  author:"Yasou"}
    ];
    
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    }
    
    var min=0;
    var max=allQuotes.length-1;
    var quoteNumber=0;
    $("#generator").click(function(){
        quoteNumber=getRandomInt(min,max);
        var html="<p><strong>"+allQuotes[quoteNumber].quote+"</strong></p>"+"<div><em>"+allQuotes[quoteNumber].author+"</em></div>";
        $("#quote").html(html);
    });
    
    // var url="https://talaikis.com/api/quotes/random/";
    // $.ajax({
    //     url:url,
    //     sucess:function(response){
    //         console.log(response);
    //     }
    // });
})