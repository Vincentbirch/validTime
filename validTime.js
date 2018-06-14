// 参数分量中两个时间验证
export function validTime(start, end) {
	if(start == null && end == null && start == "" && end == "" || start == end) {
		return true;

	} else {
		var startTime = new Date(start);
		var endTime = new Date(end);
		return start < end ? true : false
	}
}
export function setDt(e){
				var dt = new Date().toLocaleDateString().split('/')
				var y = dt[0]
				var m,d;
				if (dt[1].length==1) {
					m = '0'+dt[1]
				} else {
					m = dt[1]
				}
				if (dt[2].length==1) {
					d = '0'+dt[2]
				} else {
					d = dt[2]
				}
				var end = y+'-'+m+'-'+d+' '+'00:00:00'
				var start;
				if (m == 1) {
					start = (y-1)+'-'+12+'-'+d+' '+'00:00:00'
				} else {
					var mm = '0'+(m-1)
					start = y+'-'+mm+'-'+d+' '+'00:00:00'
				}
				return e=='end'?end: start
			}

