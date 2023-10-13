    <script>



        //메모장으로 sub 텍스트 가져오기, 서버에 올려야 보임

        $(function(){

            $.get("../txt/txt.txt", function(data) {

            $("#textBox").html(data);

            })     



        });



        </script>
