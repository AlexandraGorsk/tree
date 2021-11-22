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

function createchild(menu, container) {
	const mainul = document.createElement('ul');
	container.append(mainul);
	container.onclick = null;
	menu.forEach((item) => {
		const listItem = document.createElement('li');
		listItem.classList.add('plus');
		listItem.classList.add('bold');
		listItem.textContent = `${item.title}`;
		mainul.append(listItem);
		if (item.nodes.length) {
			listItem.onclick = (e) => {
				listItem.classList.remove('plus');
				listItem.classList.add('minus');
				mainul.classList.add(`${listItem.textContent}`);
				createchild(item.nodes, listItem);
				if(e.target.classList.contains('minus')){
					alert('hi')
				}
			};
		}
		if (!item.nodes.length) {
			listItem.onclick = (e) => {
				console.log(e.target);
				if (
					e.target.classList.contains('minus') ||
					e.target.classList.contains('non-bold') ||
					e.target.classList.contains('child')
				) {
					e.stopPropagation();
				} else {
					listItem.classList.remove('plus');
					listItem.classList.add('minus');
					const childul = document.createElement('ul');
					const childli = document.createElement('li');
					childli.textContent = 'node';
					childli.classList.add('non-bold');
					childul.classList.add('child');
					listItem.append(childul);
					childul.append(childli);
				}
			};
		}
	});
}
createchild(menu, container);
const ullarr = document.getElementsByClassName('minus');
