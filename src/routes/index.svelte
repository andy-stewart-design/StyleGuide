<script>
	import ScrollTrigger from '$lib/globals/ScrollTrigger.svelte';

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

<ScrollTrigger>
	<section class="oberved relative h-screen bg-black">
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
	<section class="oberved min-h-screen bg-white py-28 px-4 md:px-12 lg:px-20">
		<div class="max-w-3xl m-auto">
			<h2 class="font-serif font-bold text-5xl md:text-6xl tracking-[-1px] text-left pb-4">
				This is a big headline
			</h2>
			<p class="font-text text-base md:text-3xl leading-snug text-left pb-6">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quidem quasi quisquam, nam
				iusto provident deserunt, libero, tempora reiciendis.
			</p>
			<p class="font-sans text-base md:text-lg leading-snug text-left pb-6">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quidem quasi quisquam, nam
				iusto provident deserunt, libero, tempora reiciendis consectetur velit commodi neque sequi
				minus similique debitis fugiat possimus recusandae. Lorem ipsum dolor sit amet consectetur
				adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quidem quasi
				quisquam, nam iusto provident deserunt, libero, tempora reiciendis consectetur velit commodi
				neque sequi minus similique debitis fugiat possimus recusandae. Lorem ipsum dolor sit amet
				consectetur adipisicing elit.
			</p>
			<blockquote
				class="block float-right font-serif font-bold text-[30px] leading-[1.1] tracking-[-.5px] text-magenta w-1/2 translate-x-8 mb-2"
			>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quidem quasi quisquam, nam
				iusto provident deserunt, libero.
			</blockquote>
			<p class="font-sans text-base md:text-lg leading-snug text-left mb-6">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quidem quasi quisquam, nam
				iusto provident deserunt, libero, tempora reiciendis consectetur velit commodi neque sequi
				minus similique debitis fugiat possimus recusandae. Lorem ipsum dolor sit amet consectetur
				adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quidem quasi
				quisquam, nam iusto provident deserunt, libero, tempora reiciendis consectetur velit commodi
				neque sequi minus similique debitis fugiat possimus recusandae. Lorem ipsum dolor sit amet
				consectetur adipisicing elit.
			</p>
			<h3 class="font-serif font-bold text-5xl md:text-[38px] tracking-[-1px] text-left pb-4">
				This is a smaller headline
			</h3>
			<p class="font-sans text-base md:text-lg leading-snug text-left mb-6">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quidem quasi quisquam, nam
				iusto provident deserunt, libero, tempora reiciendis consectetur velit commodi neque sequi
				minus similique debitis fugiat possimus recusandae. Lorem ipsum dolor sit amet consectetur
				adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quidem quasi
				quisquam, nam iusto provident deserunt, libero, tempora reiciendis consectetur velit commodi
				neque sequi minus similique debitis fugiat possimus recusandae. Lorem ipsum dolor sit amet
				consectetur adipisicing elit.
			</p>
		</div>
	</section>
	<section class="oberved min-h-screen bg-black text-white py-28 px-4 md:px-12 lg:px-20">
		<div class="grid gap-y-4 max-w-4xl m-auto">
			<h2 class="font-serif font-bold text-6xl md:text-7xl tracking-[-1px] text-left">
				This is a headline
			</h2>
			<p class="font-text text-base md:text-xl leading-snug text-left">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quidem quasi quisquam, nam
				iusto provident deserunt, libero, tempora reiciendis consectetur velit commodi neque sequi
				minus similique debitis fugiat possimus recusandae. Lorem ipsum dolor sit amet consectetur
				adipisicing elit.
			</p>
		</div>
	</section>
</ScrollTrigger>
