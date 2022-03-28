<script>
	let src = [
		'https://teague.com/uploads/default/_2400x1585_crop_center-center_75_line/Hannah-Starbucks.jpg',
		'https://teague.com/uploads/featured/_1536x864_crop_center-center_75_line/Starbucks_Customer_Experience_Illustration.png',
		'https://teague.com/uploads/featured/_1984x1240_crop_center-center_75_line/Virgin-Hyperloop-Header.jpg',
		'https://teague.com/uploads/default/_1536x864_crop_center-center_75_line/UX-Landing-Page-Header.jpg',
		'https://teague.com/uploads/default/_1200x702_crop_center-center_100_line/AirSpace-Landing-Page-Header.jpg'
	];
	let i = 0;
	function inc() {
		i >= src.length - 1 ? (i = 0) : i++;
	}
</script>

<section class="relative h-screen bg-black" on:click={inc}>
	<div class="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-black opacity-30 z-10" />
	<div class="absolute top-0 right-0 w-64 h-full bg-gradient-to-l from-black opacity-30 z-10" />
	<img class="w-full h-full object-cover opacity-50" src={src[i]} alt="fpo" />
</section>
<section class="min-h-screen bg-white px-4 md:px-12 lg:px-20">
	<p>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quidem quasi quisquam, nam iusto
		provident deserunt, libero, tempora reiciendis consectetur velit commodi neque sequi minus
		similique debitis fugiat possimus recusandae.
	</p>
</section>
<section class="min-h-screen bg-black" />
