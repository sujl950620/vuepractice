
<template>
    <datepicker @update-date="updateDate" v-once></datepicker>
        
</template>
<script>
        Vue.component('datepicker', {
          template: '<input/>',
          mounted: function() {
            var self = this;
            $(this.$el).datepicker({
              dateFormat: "yy-mm-dd",
              onSelect: function(d){self.$emit('update-date',d)}
            });
            $.datepicker.setDefaults({
                monthNames: ['년 1월','년 2월','년 3월','년 4월','년 5월','년 6월','년 7월','년 8월','년 9월','년 10월','년 11월','년 12월'],
                dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
                showMonthAfterYear:true,
                showOn: 'button',
                closeText: '닫기',
                buttonImage: '/images/calender.png',
                buttonImageOnly: true,
                dateFormat: 'yy/mm/dd'    
            }); 
            
            $("#date_start").datepicker({
                dateFormat : 'yy-mm-dd',
                duration: 200,
                onSelect:function(dateText, inst){
                    var startDate = parseInt($("#date_end").val().replace("-", '').replace("-", ''));
                    var endDate = parseInt(dateText.replace(/-/g,''));
                    
                    if (endDate > startDate) {
                        alert("조회 기간은 과거로 설정하세요.");
                        //달력에 종료 날짜 넣어주기
                        $("#date_start").val($("#stdt").val());
                    } else {
                        $("#stdt").val($("#date_start").val());
                    }
                }
            });
            
            $("#date_end").datepicker({
                dateFormat : 'yy-mm-dd',
                duration: 200,
                onSelect:function(dateText, inst){
                    var startDate = parseInt($("#date_start").val().replace("-", '').replace("-", ''));
                    var endDate = parseInt(dateText.replace(/-/g,''));
                    
                    if (startDate > endDate) {
                        alert("조회 기간은 과거로 설정하세요.");
                        //달력에 종료 날짜 넣어주기
                        $("#date_end").val($("#eddt").val());
                    } else {
                        $("#eddt").val($("#date_end").val());
                    }
                }
            });
          },
          beforeDestroy: function(){$(this.$el).datepicker('hide').datepicker('destroy')}
        });
        
        new Vue({
          el: '#app',
          data: {
            date: null
          },
          methods: {
            updateDate: function(d) {
              this.date = d;
            }
          }
        });
        </script>