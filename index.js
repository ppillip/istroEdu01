
    $(document).ready(function(){

        $("button[name=listRender]").click(function(){

            $("table[name=table01] tbody tr").remove();

            _.each(data,function(obj){

                var $tr = $("<tr>"
                +   "<td>"+obj.name+"</td>"
                +   "<td>"+obj.age+"</td>"
                +   "<td>"+obj.email+"</td>"
                +   "<td>"+obj.phone+"</td>"
                +   "<td>"+obj.company+"</td>"
                +   "<td>"+obj.birthday+"</td>"
                +   "</tr>");

                $tr.appendTo("table[name=table01] tbody");

            });

        });


        $("button[name=save]").click(function(){

            /* 1. 텍스트박스값을 저장할 json*/

            var rtn = {};

            rtn["_id"] = $("input[name=_id]").val() ;
            rtn["name"] = $("input[name=name]").val() ;
            rtn["age"] = $("input[name=age]").val() ;
            rtn["phone"] = $("input[name=phone]").val() ;
            rtn["company"] = $("input[name=company]").val() ;
            rtn["birthday"] = $("input[name=birthday]").val() ;


            var rtn = {};

            _.each( $(".form-control") , function(obj){
                var ctrl = $(obj);
                rtn[ctrl.attr("name")] = ctrl.val();
            });

            var rtn = {
                _id : $("input[name=_id]").val()
                ,name : $("input[name=name]").val()
                ,age : $("input[name=age]").val()
                ,phone : $("input[name=phone]").val()
                ,company : $("input[name=company]").val()
                ,birthday : $("input[name=birthday]").val()
            };






            /* 2. 배열에 push 합니다. */
            data.push(rtn);

            /* 3. 리스트를 다시 그립니다. */
            $("button[name=listRender]").trigger('click');

        });

    });






