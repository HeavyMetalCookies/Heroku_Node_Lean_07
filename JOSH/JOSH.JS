
    $( document ).prop( "title" , "[JOSH.*]" );

            const API_Get_004=function( 
                a_e       //: api_end 
            ,   p_o       //: api_pam_obj
            ,   cbf       //: callback_function
            ,   wan       //: what do you want back? 
                          //: "XHR" or "R_T"
            ){ 
            "use strict"
                var xhr   ;  
                var uoa   ;  
                var p_s   ; //: api_pam_str
                var nir   ;

                //:Need to define the base-url of your
                //:application in order to wire-up calls.
                //:This is done by including "WHO_AMI"
                //:script that defines "WHO_AMI" variable.
                if( !WHO_AMI ){
                    var msg_err=("[REQUIRES:WHO_AMI:SCRIPT]");
                    window.alert( msg_err );
                    throw(        msg_err );
                };;
            
                //:Build_Query_String_From_Object:
                if( null != p_o ){
                    p_s="";
                    nir=(0-1);
                    for( var k_v of Object.entries( p_o )  ){
                        nir++;
                        if( nir== 0 ){ p_s += "?" ; };
                        if( nir > 0 ){ p_s += "&" ; };
                        p_s += (  k_v[0]+ "=" +k_v[1] );
                    };;
                };;
                var uoa =(""                                + ""
                    +"https://"                             + ""
                    +((((((((((((((( WHO_AMI )))))))))))))))+ ""
                    +   "/"                                 + ""
                    +   a_e                                 + ""
                    +   p_s                                 + ""
                );;
                xhr = new XMLHttpRequest();
                xhr.open("GET",uoa);
                xhr.send();
                xhr.onreadystatechange=( nat_eve )=>{
                if( 4 == xhr.readyState ){
                        
                    if( null == cbf ){
                        //:Default_Feedback:
                        $( document.body ).append(
                            $("<pre>").text( xhr.responseText )
                    
                        );;
                    }else
                    if( null != cbf ){
                        var r_t =( xhr.responseText );
                        if( "XHR" == wan ){ cbf( xhr ); }else
                        if( "R_T" == wan ){ cbf( r_t ); }else
                        if(   1   ==  1  ){
                            throw("[DONT_KNOW_WHAT_TO_DO]");
                        };;
                    }else{
                        throw("[EDCL:2020_07_19]");
                    };;
                
                };;};;
            };;//://///////////////////////////:[API_Get_004]://

    const Ind_Lin=function( msg ){
        var tab=(" ".repeat( 4 * 2 ) );
        msg = msg.split("\n").join( "\n" + tab );
        msg = tab + msg;
        return( msg );
    };;

    const API_Get_Exa_CBF=function( r_t ){
        var msg=(""
        +   "[API_Get_Exa_CBF:r_t]"
        +   "<<<"
        +   "\n"
        +    Ind_Lin( r_t )
        +   ">>>"
        );;
        alert( msg );
    };;
    const API_Get_Exa=function(){
        
        var cbf=( API_Get_Exa_CBF );
        API_Get_004( "UPDATE_TAB_001" , {}, cbf, "R_T" );

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
            .click( API_Get_Exa )
    );;