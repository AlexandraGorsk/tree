const menu = [
	{
		title: 'node l.1',
		nodes: [
			{
				title: 'node l.1.1',
				nodes: [
					{
						title: 'node l.1.1.1',
						nodes: [
							{
								title: 'node l.1.1.1.1',
								nodes: [],
							},
						],
					},
					{
						title: 'node l.1.1.2',
						nodes: [],
					},
				],
			},
			{
				title: 'node l.1.2',
				nodes: [],
			},
		],
	},
	{
		title: 'node l.2',
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
			listItem.onclick = () => {
				listItem.classList.remove('plus');
				listItem.classList.add('minus');
				createchild(item.nodes, listItem);
			};
		}
		if (!item.nodes.length) {
			listItem.onclick = (e) => {
				if (
					e.target.classList.contains('minus') ||
					e.target.classList.contains('non-bold')
				) {
					e.stopPropagation();
				}
				else {
					listItem.classList.remove('plus');
					listItem.classList.add('minus');
					const childul = document.createElement('ul');
					const childli = document.createElement('li');
					childli.textContent = 'node';
					childli.classList.add('non-bold');
					listItem.append(childul);
					childul.append(childli);
				}
			};
		}
	});
}
createchild(menu, container);
