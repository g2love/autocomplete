# autocomplete input自动完成

1、自动完成 根据json数据自动完成数据
```
<script type="text/javascript" src="../jquery-1.12.3.min.js"></script>
<script type="text/javascript" src="./auto.js"></script>
<div>
		<input type="text" id="testInput"/>
	</div>
	<script type="text/javascript">
		 var datas =[{"id":"2","text":"中国石油天然气股份有限公司"}, 
		{"id":"4","text":"中国建筑股份有限公司"},
		{"id":"3","text":"中国移动有限公司"},
		{"id":"5","text":"中国工商银行股份有限公司"},
		{"id":"7","text":"中国铁建股份有限公司"},
		{"id":"6","text":"中国中铁股份有限公司"},
		{"id":"8","text":"上海汽车集团股份有限公司"},
		{"id":"9","text":"中国建设银行股份有限公司"},
		{"id":"11","text":"中国农业银行股份有限公司"},
		{"id":"10","text":"	中国人寿保险股份有限公司"},
		{"id":"12","text":"中国银行股份有限公司"},
		{"id":"14","text":"中国平安保险(集团)股份有限公司"},
		{"id":"13","text":"中国交通建设股份有限公司"},
		{"id":"15","text":"	中国电信股份有限公司"},
		{"id":"16","text":"中国人民保险-集团股份有限公司"},
		{"id":"18","text":"	中国联合网络通信股份有限公司"},
		{"id":"19","text":"	中国神华能源股份有限公司"},
		{"id":"20","text":"	中国海洋石油有限公司"},
		{"id":"16","text":"中国冶金*科工-股份有限公司"},
		{"id":"17","text":"1233456"},
		{"id":"21","text":"	联想集团有限公司"}];

		var datas2=['01','02','03'];
			$('#testInput').autoGrepData(datas,'text');
			// $('#testInput').autoGrepData(datas2);
	</script>
```
2、自动添加email后缀
```
<script type="text/javascript" src="../jquery-1.12.3.min.js"></script>
<script type="text/javascript" src="./autoEmail.js"></script>
<div>
		<input type="text" id="testInput"/>
	</div>
	<script type="text/javascript">
		$('#testInput').autoAddEmail();
			
	</script>
```
