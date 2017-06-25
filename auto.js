;(function($) {
	$.fn.autoGrepData=function(data,dataProperty) {
		var $target=$(this);
		$target.parent().css('position','relative');
		const $width=$target.outerWidth();
		const $height=$target.outerHeight();
		const $offsetTop=$target.offset().top;
		const $offsetLeft=$target.offset().left;

		const GrepData=function(data,dataProperty) {
            var inputValue = $target.val().replace(/^\s+|\s+$/g,"");
			    inputValue = inputValue.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");//替换标点符号
			    var matcher = new RegExp(inputValue, "i");
			    return $.grep(data,
			    function(value) {
			    	if(Object.prototype.toString.call(value)=='[object Object]' ){
			    		if(dataProperty){
					        return matcher.test(value[dataProperty]);
			    		}else{
			    			console.warn('请传入object中需要提取的属性');
			    		}
			    	}else if(Object.prototype.toString.call(value)=='[object String]'){
			    		return matcher.test(value);
			    	}
			    });
			}
		const creatInput=function (inputData){
			var $creatInput=$('<div inputBox="creatInput"></div>').css({
				'border-width':'1px',
				'border-style':'solid',
				'border-color':'#000',
				'max-height':'200px',
				'width':$width-2,
				'background-color':'#ffffff',
				'margin':0,
				'padding':0,
				'position':'absolute',
				'top':$height,
				'left':0,
				'overflow-y': 'auto',
                'overflow-x': 'hidden',
                'white-space':'nowrap',
			})
			for(var i in inputData){
					var _thisP=$('<p></p>').css({
						'color':'#000',
						'cursor':'pointer',
						'padding':'0 5px',
						'margin':0,
						'height':'30px',
						'width':'100%',
						'line-height':'30px',
					});
					_thisP.hover(function(){
						$(this).css({
							'background-color':'#16865f',
							'color':'#fff',
						})
						$target.val($(this).text().replace(/\s/g, ""))
					},function(){
						$(this).css({
							'background-color':'transparent',
							'color':'#000',
						})
						$(this).removeAttr('active');
					})
				if(Object.prototype.toString.call(inputData[i])=='[object Object]' ){
					_thisP.text(inputData[i][dataProperty])
					$creatInput.append(_thisP)
				}else if(Object.prototype.toString.call(inputData[i])=='[object String]' ){
					_thisP.text(inputData[i])
					$creatInput.append(_thisP)
				}
			}
			if($target.parent().find('div[inputBox]')){
				$target.parent().find('div[inputBox]').remove();
			}
			$creatInput.bind('click',function(){
				$target.blur();
			})
			$target.after($creatInput);
		}
		$target.bind({
			'focus':function(){
				if($target.val()!=''&&$target.val()!=' '){
					creatInput(GrepData(data,dataProperty));
				}
			},
			'keyup':function(){
				creatInput(GrepData(data,dataProperty));
				if($target.val()==''||$target.val()==' '||GrepData(data,dataProperty).length==0){
					$target.parent().find('div[inputBox]').remove();
				}
			},
			'blur':function(){
				$target.parent().find('div[inputBox]').remove();
			},
		});

		

	}
})(jQuery);