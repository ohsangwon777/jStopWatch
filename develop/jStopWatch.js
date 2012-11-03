/**
 * jStopWatch(javascript stop watch) for measuring javascript excution time
 *
 * Terms of Use - jStopWatch v1.0
 * under the MIT (http://www.opensource.org/licenses/mit-license.php) License.
 *
 * Copyright 2012 Sangwon Oh (ohsangwon777@gmail.com). All rights reserved.
 *
 */

var jStopWatch = {

	//Variables start with '_' means private. Don't use these public.

	start: function(jobName){

		var o = {};

		o.startTime = new Date();

		this._jobList.jobName = o;

	},

	stop: function(jobName){

		var o = this._jobList.jobName;

		o.endTime = new Date();

		var eT = o.endTime-o.startTime;

		var jStopWatchObj = $(this._markup);

		this._renderMarkup(jStopWatchObj, jobName, eT);

	},

	_renderMarkup : function(obj, jobName, eT){

		obj.attr('style', this._design.jStopwatch);

		obj.find('.jobName')
			.text(jobName)
			.attr('style', this._design.jobName);
		obj.find('.elapsedTime')
			.text(eT)
			.attr('style', this._design.elapsedTime);
		obj.find('.unit')
			.text(this._unit)
			.attr('style', this._design.unit);

		obj.find('.close')
			.attr('style', this._design.close);

		var jStopwatchHeight = obj.height();
		var jStopwatchTop = obj.css('top').replace('px','');
		var jStopwatchCnt = $('.'+obj.attr('class')).length;
		var cssTop = (jStopwatchCnt)*jStopwatchHeight + (jStopwatchCnt+1)*jStopwatchTop;

		obj.css({
			top:cssTop,
			left:obj.css('left')
		})

		this._addEvents(obj);

		$('body').append(obj);
		obj.fadeIn();

	},

	_addEvents : function(obj){
		obj.find('.close').bind('click', function(){
			obj.fadeOut(function(){
				obj.remove();
				jStopWatch._updatePosition(obj);
			});
		});
	},

	_updatePosition : function(obj){

		var jStopwatchCntClass = obj.attr('class');
		var jStopwatchs = $('.'+jStopwatchCntClass);
		var jStopwatchHeight = obj.height();

		jStopwatchs.each(function(i){
			var cssTop = (i)*jStopwatchHeight + (i+1)*10;
			$(this).css({
				top:cssTop,
			})
		});
		
		

	},

	_unit : 'sec',

	_noNamedob : {},

	_jobList : {},

	_markup :
		'<div class="jStopWatch">'+
			'<span class="jobName"></span>'+
			'<span class="elapsedTime"></span>'+
			'<span class="unit"></span>'+
			'<span class="close" title="close">&#10004;</span>'+
		'</div>',

	_design : {
		jStopwatch : 
			'display: none;'+
			'font-family:monospace,monospace;'+
			'font-size: 15px;'+
			'height: 30px;'+
			'line-height: 30px;'+
			'position: fixed;'+
			'top: 10px;'+
			'left: 10px;'+
			'font-weight: bold;'+
			'padding: 0 10px;'+
			'background: #272822;'+
			'color: white;'+
			'border-radius: 5px;'+
			'-webkit-transition: top 0.3s;'+
			'opacity: 0.9;'
		,jobName :
			'margin-right: 10px;'+
			'font-family: serif;'+
			'color: #F8512F;'
		,elapsedTime :
			'margin-right: 5px;'+
			'color: #EDFEEB;'
		,unit :
			'margin-right: 10px;'+
			'color: #EDFEEB;'
		,close :
			'cursor: pointer;'+
			'color: #A58EA2;'
	}

};