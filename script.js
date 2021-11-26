const menu = [
	{
		title: 'nodel.1',
		nodes: [
			{
				title: 'nodel.1.1',
				nodes: [
					{
						title: 'nodel.1.1.1',
						nodes: [
							{
								title: 'nodel.1.1.1.1',
								nodes: [],
							},
						],
					},
					{
						title: 'nodel.1.1.2',
						nodes: [],
					},
				],
			},
			{
				title: 'nodel.1.2',
				nodes: [],
			},
		],
	},
	{
		title: 'nodel.2',
		nodes: [],
	},
];

const tree = document.createElement('h1');
tree.textContent = 'Tree';
document.body.append(tree);
const container = document.createElement('div');
document.body.append(container);
function createChild(menu, container) {
	const mainUl = document.createElement('ul');
	container.append(mainUl);
	menu.forEach((item) => {
		const listItem = document.createElement('li');
		listItem.classList.add('plus', 'bold');
		listItem.textContent = `${item.title}`;
		mainUl.append(listItem);

		if (item.nodes.length) {
			createChild(item.nodes, listItem);
		}
		if (!item.nodes.length) {
			const newUl = document.createElement('ul');
			const newLi = document.createElement('li');
			newLi.textContent = 'node';
			newLi.classList.add('non-bold');
			listItem.append(newUl);
			newUl.append(newLi);
		}
	});
}
function openElement(e) {
	e.target.classList.toggle('minus');
	e.target.classList.toggle('plus');
	for (let child of e.target.children) {
		child.classList.toggle('display-none');
	}
}

function addEvent() {
	const allLi = document.getElementsByClassName('bold');
	console.log(allLi);
	Array.from(allLi).forEach((element) => {
		for (let li of allLi) {
			for (let uls of li.children) uls.classList.add('display-none');
		}
		element.onclick = (e) => {
			if (!e.target.classList.contains('non-bold')) {
				e.stopPropagation();
				console.log('hi');
				openElement(e);
			}
		};
	});
}

createChild(menu, container);
addEvent();
