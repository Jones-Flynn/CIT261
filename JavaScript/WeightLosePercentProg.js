<script type="text/javascript">
	function Weightlosepercent() {
		// Read a Beginning Weight from the user.
		var text = document.getElementById('BWinputBox').value;
		// Read a Current Weight from the user.
		var text1 = document.getElementById('CWinputBox').value;
		// Convert what the user typed from text into a number.
		var BWinputBox = parseFloat(text)
		var CWinputBox = parseFloat(text1)
		// Convert into Precent
		var Percent = ((BWinputBox-CWinputBox)/BWinputBox)*100
		// Round the number down to tenth decimal.
		var digits = 2;
		var multiplier = Math.pow(10, digits)
		percentRounded = Math.round(Percent * multiplier) / multiplier;
		// Display the Percent to the user.
		document.getElementById('Weightlosepercent').innerHTML = percentRounded + "%";}
</script>
