;(function($) {
	$.fn.autoAddEmail=function() {
		var $target=$(this);
		$target.parent().css('position','relative');
		const $width=$target.outerWidth();
		const $height=$target.outerHeight();
		const $offsetTop=$target.offset().top;
		const $offsetLeft=$target.offset().left;
		const emailArr=['@qq.com','@163.com','@126.com','@sina.com','@sina.cn','@gmail.com','@yahoo.com','@msn.com','@hotmail.com','@ask.com','@live.com'];
		const addEmail=function() {
            var inputValue = $target.val().replace(/\s/g, ""),result=[];
            inputValue=inputValue.split('@');
            inputValue=inputValue[0];
            if(inputValue!=''){
            	result=[inputValue];
            }
			    for(var i in emailArr){
			    	result.push(inputValue+emailArr[i]);
			    }
			    return result;
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
					creatInput(addEmail());
				}
			},
			'keyup':function(e){
				creatInput(addEmail());
				if($target.val()==''||$target.val()==' '){
					$target.parent().find('div[inputBox]').remove();
				}
			},
			'blur':function(){
				$target.parent().find('div[inputBox]').remove();
			},
		});

		

	}
})(jQuery);