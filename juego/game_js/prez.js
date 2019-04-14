      function fecha(){
           var mydate = new Date();
           document.getElementById('today').innerHTML=mydate;
      }
    function f(){
        game ={"challan": [
                    {"quest": "Some people are convinced that global warming is real.</br> The european union offers you the choice to sign  a treaty to curve emmision but that would have a negative impact on jobs",
                    "options1": ["You say is more important to have people with jobs. Global warming is made up science anyway",
                                 "Is more important to curve global warming.  Some people may lose their job but Oh well the planet is more important ",
                                 "I am not sure. Let me talk to congress"  ],
                     "points": [90,30,50]  },
                    {"quest": "China just imposed new tariffs to american imports and you say...",
                     "options1": ["The chinese goverment does not play fair and it is not interested in fair trade",
                                  "As long as there is trade and peace I am OK",
                                  "Congress should look into this"],
                     "points": [90,30,50]   },
                    {"quest": "Russia is looked as enemy ","options1": [1,2,3],"points": [90,30,50]   } ]
                         }
          var mydate = new Date();
                    choices =["sign it and say it is the right thing to do","Don't sign and say you don't believe in global warming","Don't sign it and say you need to ask congress","wesdaf"];
          var rand_no;
          rand_no = Math.random();
           rand_no = rand_no * 3;
          rand_no = Math.floor(rand_no);
          document.getElementById('question').innerHTML=game.challan[rand_no].quest;
          for (x=0;x<3;x++){
              document.getElementById('res'+x).innerHTML=game.challan[rand_no].options1[x];
          }

          return 0;};
     $(document).ready(function(){
      f();
      } );
