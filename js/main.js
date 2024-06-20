//TODO
////1. bg color
////2. color
////3. font
////4. ACA & WACA
////5. Root spacing
//6. navbar
//		i.Home
//		ii.Portfolio
//		iii.About
//		iv.Contact
//		v.Blog

//7. open navbar
//		i.Home
//		ii.Portfolio
//		iii.About
//		iv.Contact
//		v.Blog
//		vi.Additional Info
//		vii.animation

//8. copy
//		i.Mission statement
//		ii.Latest Projects
//		iii.About
//		iv.Let's Collberate
//		v.Blog
//		vi.Additional Info

//9. images
//		i.Loading images
//		ii.Header Image
//		iii.Latest Projects images

//10. buttons

//11. animation
//		i.Projects Aimation
//		ii.Loading Animation
//		iii.ATF Header Animation

//12. footer
//		i.Twitter
//		ii.Linkedin
//		iii.github
//		iv.email

//13. Recheck ACA & WCGA

//14. logo / icon

//15. Spacing
//		i.Mobile
//		ii.Tablet
//		iii.Desktop

///*.splash {
//	display: flex;
//	flex-flow: row wrap;
//	align-items: center;
//	justify-content: center;
//}
//
//.splash > * {
//	flex: auto;
//}
//
//.splash img {
//	flex: 1 1 75%;
//	max-width: 60%;
//}
//
//.text-container {
//	flex: 0 1 25%;
//	min-width: 200px;
//}
//
//.nav-container {
//	flex-flow: row-reverse;
//}
//
//.icon-list {
//	flex-flow: column;
//	align-self: center;
//}
//
//.icon {
//	width: 25px;
//}
//
//.port-container {
//	justify-content: space-evenly;
//	justify-items: center;
//	align-content: space-evenly;
//	align-items: center;
//	row-gap: 1rem;
//}
//
//.container > h2 {
//	color: #5e35b1;
//}
//
//.pop-out {
//	--c: #578ecf; /* the color */
//	--b: 0.2em; /* border length*/
//	--d: 20px; /* the cube depth */
//
//	--_s: calc(var(--d) + var(--b));
//	color: var(--c);
//	border: solid #0000;
//	border-width: var(--b) var(--_s) var(--_s) var(--b);
//	background: conic-gradient(
//				from -90deg at right var(--d) bottom var(--d),
//				#0000 90deg,
//				rgb(255 255 255 /0.3) 0 225deg,
//				rgb(255 255 255 /0.6) 0
//			)
//			border-box,
//		conic-gradient(
//				at right var(--_s) bottom var(--_s),
//				var(--c) 270deg,
//				#0000 0
//			)
//			100% 100% / calc(100% - var(--b)) calc(100% - var(--b)) border-box;
//	transform: translate(var(--d), var(--d));
//	clip-path: polygon(
//		0% 0%,
//		calc(100% - var(--d)) 0%,
//		calc(100% - var(--d)) 0%,
//		calc(100% - var(--d)) calc(100% - var(--d)),
//		0 calc(100% - var(--d)),
//		0 calc(100% - var(--d))
//	);
//	transition: 0.5s;
//}
//
//.pop-out:hover {
//	transform: translate(0, 0);
//	clip-path: polygon(
//		0% 0%,
//		calc(100% - var(--d)) 0%,
//		100% var(--d),
//		100% 100%,
//		var(--d) 100%,
//		0 calc(100% - var(--d))
//	);
//}
//
//.pop-out1 {
//	--c: #d8761b; /* the color */
//	--b: 0.2em; /* border length*/
//	--d: 20px; /* the cube depth */
//
//	--_s: calc(var(--d) + var(--b));
//
//	color: var(--c);
//	border: solid #0000;
//	border-width: var(--b) var(--b) var(--_s) var(--_s);
//	background: conic-gradient(
//				at left var(--d) bottom var(--d),
//				#0000 90deg,
//				rgb(255 255 255 /0.3) 0 225deg,
//				rgb(255 255 255 /0.6) 0
//			)
//			border-box,
//		conic-gradient(
//				at left var(--_s) bottom var(--_s),
//				#0000 90deg,
//				var(--c) 0
//			)
//			0 100% / calc(100% - var(--b)) calc(100% - var(--b)) border-box;
//	transform: translate(calc(var(--d) / -1), var(--d));
//	clip-path: polygon(
//		var(--d) 0%,
//		var(--d) 0%,
//		100% 0%,
//		100% calc(100% - var(--d)),
//		100% calc(100% - var(--d)),
//		var(--d) calc(100% - var(--d))
//	);
//	transition: 0.5s;
//}
//.pop-out1:hover {
//	transform: translate(0, 0);
//	clip-path: polygon(
//		0% var(--d),
//		var(--d) 0%,
//		100% 0%,
//		100% calc(100% - var(--d)),
//		calc(100% - var(--d)) 100%,
//		0% 100%
//	);
//}
//
//.pop-out2 {
//	--c: #88b591; /* the color */
//	--b: 0.2em; /* border length*/
//	--d: 20px; /* the cube depth */
//
//	--_s: calc(var(--d) + var(--b));
//
//	color: var(--c);
//	border: solid #0000;
//	border-width: var(--b) var(--b) var(--_s) var(--_s);
//	background: conic-gradient(
//				at left var(--d) bottom var(--d),
//				#0000 90deg,
//				rgb(255 255 255 /0.3) 0 225deg,
//				rgb(255 255 255 /0.6) 0
//			)
//			border-box,
//		conic-gradient(
//				at left var(--_s) bottom var(--_s),
//				#0000 90deg,
//				var(--c) 0
//			)
//			0 100% / calc(100% - var(--b)) calc(100% - var(--b)) border-box;
//	transform: translate(calc(var(--d) / -1), var(--d));
//	clip-path: polygon(
//		var(--d) 0%,
//		var(--d) 0%,
//		100% 0%,
//		100% calc(100% - var(--d)),
//		100% calc(100% - var(--d)),
//		var(--d) calc(100% - var(--d))
//	);
//	transition: 0.5s;
//}
//.pop-out2:hover {
//	transform: translate(0, 0);
//	clip-path: polygon(
//		0% var(--d),
//		var(--d) 0%,
//		100% 0%,
//		100% calc(100% - var(--d)),
//		calc(100% - var(--d)) 100%,
//		0% 100%
//	);
//}
//***/
