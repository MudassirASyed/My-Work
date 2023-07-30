

        var val = [];
        function start() {
          jQuery('.result1').removeClass("active");
          jQuery('.result2').removeClass("active");
          jQuery('.result3').removeClass("active");
          jQuery('.q1').addClass("active");
        }
    
        function checkAnswer(ques, ans, next) {
          if (next > 0) {
            val[ques] = ans;
            jQuery('.question .row').removeClass("active");
            jQuery('.q' + next).addClass("active");
            //console.log(ans);
            //console.log(next);
          }
          else {
            /*Result Calculation:
          If q1, q2, q4, q8, q9, q6 = yes and 3, q5, q7, q10 = yes/no then result 1 
          If q2, q1, a4 = yes and q3, q6, q5, q7, q10 = yes/no and q8, q9 = yes/no then result 2 
          Otherwise show the result 3
              */
            if ((val[1], val[2], val[4], val[8], val[9], val[6] == 1) && (val[3], val[5], val[7], val[10] == 1 || 2)) {
              jQuery('.question .row').removeClass("active");
              jQuery('.result1').addClass("active");
    
            }
            else if ((val[1], val[2], val[4] == 1) && (val[3], val[6], val[5], val[7], val[10] == 1 || 2) && (val[8], val[9] == 1 || 2)) {
              jQuery('.question .row').removeClass("active");
              jQuery('.result2').addClass("active");
    
            }
            else {
              jQuery('.question .row').removeClass("active");
              jQuery('.result3').addClass("active");
    
    
    
            }
          }
        }
    
