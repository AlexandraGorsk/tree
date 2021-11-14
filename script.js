const menu = [
	{
		title: 'node l.1',
		nodes: [
			{
				title: 'node l.2',
				nodes: [
					{
						title: 'node l.3',
						nodes: [
							{
								title: 'node l.4',
								nodes: [],
							},
						],
					},
					{
						title: 'node l.3',
						nodes: [],
					},
				],
			},
			{
				title: 'node l.2',
				nodes: [],
			},
		],
	},
	{
		title: 'node l.1',
		nodes: [],
	},
];
console.log(menu[0].title);
console.log(menu[0].nodes);
const tree = document.createElement('h1')
tree.textContent = "Tree";
document.body.append(tree)
for (let i = 0; i < menu.length; i++) {
	const title = menu[i].title;
	const ul = document.createElement('ul');
	const list = document.createElement('li');
	const allli = document.getElementsByTagName('li')
	const childul = document.createElement('ul');
	const childli = document.createElement('li');
	list.classList.add('plus');
	list.classList.add('bold');
	list.textContent = title;
	document.body.append(ul);
	ul.append(list);
	// allli[i].addEventListener('click',function(event) {
	// 	const target = event.target;
	// 	console.log(allli[i].get;
	// });
	list.onclick = (e) => {
		if (list.classList.contains('plus')) {
			list.classList.remove('plus');
			list.classList.add('minus');
			childul.classList.remove('display-none');
		} else {
			list.classList.add('plus');
			list.classList.remove('minus');
			childul.classList.add('display-none');
		}
		if (!menu[i].nodes.length) {
			childli.textContent = 'node';
			ul.append(childul);
			childul.append(childli);
		}
		if (menu[i].nodes.length) {
			const newmenu = menu[i].nodes
		}
	};
}

createchild(menu)


// console.log(menu);
