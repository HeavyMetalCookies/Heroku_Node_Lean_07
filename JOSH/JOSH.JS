
    $( document ).prop( "title" , "[JOSH.*]" );

    const CALL_REST_SERVICE=function(){ "use strict"

        //:alert("[TODO:CALL_REST_SERVICE]");

        var url =(""                                   +""
            +"https://"                                +""
            +"hn6.herokuapp.com/"                      +""
            +"R"                                       +""
        );;
        var xhr_req = new XMLHttpRequest();
            xhr_req.open("GET",url);
            xhr_req.send();
            xhr_req.onreadystatechange=(e)=>{
                console.log(e                     );
                console.log( xhr_req.status       );
                console.log( xhr_req.readyState   );
                console.log( xhr_req.responseText );
                if( xhr_req.readyState===4 ){
                    
                   $( document.body ).append(
                        $("<pre>").text( xhr_req.responseText )
    
                    );;

                };;
            };;
    };;

    const CreateDocumentBodyIfNotExists=function(){

        var doc_bod =( document.body );
        if(!doc_bod){
            doc_bod = document.createElement("BODY");
            document.body=( doc_bod );  
        };;

        //:Don't return anything because we need to use
        //:the jquery wrapped document body.
        return( undefined /** void **/ );
    };;

    CreateDocumentBodyIfNotExists();
    var doc_bod=$( document.body );

    doc_bod.append(
        $("<button>")
            .text( "TEST" )
            .click( CALL_REST_SERVICE )
    );;