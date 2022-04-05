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

<section class="relative h-screen bg-black">
	<div class="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-black opacity-30 z-10" />
	<div class="absolute top-0 right-0 w-64 h-full bg-gradient-to-l from-black opacity-30 z-10" />
	<img class="w-full h-full object-cover opacity-50" src={src[i]} alt="fpo" />
	<button
		class="absolute bottom-12 left-4 flex gap-x-2 md:left-12 lg:left-20 bg-white font-bold font-lg rounded-full py-4 px-6 transition-colors duration-300 hover:bg-magenta hover:text-white"
		on:click={inc}
		><svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-6 w-6"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			stroke-width="2"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
			/>
		</svg>Swap Image</button
	>
</section>
<section class="min-h-screen bg-white py-28 px-4 md:px-12 lg:px-20">
	<div class="grid gap-y-4 max-w-4xl m-auto">
		<h2 class="font-serif font-bold text-6xl md:text-8xl tracking-[-1px] text-center">
			This is a headline
		</h2>
		<p class="text-base md:text-lg leading-snug text-center">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quidem quasi quisquam, nam iusto
			provident deserunt, libero, tempora reiciendis consectetur velit commodi neque sequi minus
			similique debitis fugiat possimus recusandae. Lorem ipsum dolor sit amet consectetur
			adipisicing elit.
		</p>
	</div>
</section>
<section class="min-h-screen bg-black text-white py-28 px-4 md:px-12 lg:px-20">
	<div class="grid gap-y-4 max-w-4xl m-auto">
		<h2 class="font-serif font-bold text-6xl md:text-8xl tracking-[-1px] text-center">
			This is a headline
		</h2>
		<p class="text-base md:text-lg leading-snug text-center">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quidem quasi quisquam, nam iusto
			provident deserunt, libero, tempora reiciendis consectetur velit commodi neque sequi minus
			similique debitis fugiat possimus recusandae. Lorem ipsum dolor sit amet consectetur
			adipisicing elit.
		</p>
	</div>
</section>
