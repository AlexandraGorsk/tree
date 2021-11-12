const menu = [
	{
		title: 'node',
		nodes: [
			{
				title: 'node',
				nodes: [
					{
						title: 'node',
						nodes: [
							{
								title: 'node',
								nodes: [],
							},
						],
					},
					{
						title: 'node',
						nodes: [],
					},
				],
			},
			{
				title: 'node',
				nodes: [],
			},
		],
	},
	{
		title: 'node',
		nodes: [],
	},
];

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
			console.log(menu[i].nodes[0]);
		}
	};
}
const allul = document.getElementsByTagName('ul');
console.log(allul);
function openthee(allul) {
	for (let i = 0; i < menu.length; i++) {
		if (menu[i].nodes.length) {
			for (j = 0; j < allul.length; J++) {
				const newul = document.createElement('ul')
				const child = document.createElement('li');
				child.textContent = 'node';
				allul[j].append(newul);
				newul.append(child)
			}
		}
	}
}

// console.log(menu[1].title)
console.log(menu);
