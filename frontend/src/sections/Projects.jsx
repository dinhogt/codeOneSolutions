import { useState, useEffect } from "react";

export default function Projects() {
	const [items, setItems] = useState([]);
	const [current, setCurrent] = useState(0);
	const visibleCount = 3;

	useEffect(() => {
		fetch("/projects.json")
			.then((res) => res.json())
			.then((data) => setItems(data))
			.catch(() => setItems([]));
	}, []);

	useEffect(() => {
		if (items.length === 0) return;
		const timer = setInterval(() => {
			setCurrent((prev) => (prev + 1) % items.length);
		}, 4000);
		return () => clearInterval(timer);
	}, [items]);

	const goPrev = () =>
		setCurrent((prev) => (prev === 0 ? items.length - 1 : prev - 1));
	const goNext = () => setCurrent((prev) => (prev + 1) % items.length);

	// Preenche com projetos repetidos ou placeholders se houver menos de 3
	const getDisplayItems = () => {
		if (items.length === 0) {
			return Array(visibleCount).fill({
				title: "Em breve",
				description: "Um novo projeto será exibido aqui.",
				image: "https://placehold.co/600x400/cccccc/FFFFFF/png?text=Em+Breve",
			});
		}
		if (items.length < visibleCount) {
			const filled = [...items];
			while (filled.length < visibleCount) {
				filled.push(...items);
			}
			return filled.slice(0, visibleCount);
		}
		// Carousel infinito e transição correta
		const display = [];
		for (let i = 0; i < visibleCount; i++) {
			display.push(items[(current + i) % items.length]);
		}
		return display;
	};

	const displayItems = getDisplayItems();

	return (
		<section id="projects" className="py-10">
			<div className="container-xl">
				<h2 className="text-3xl text-center font-bold text-accent">
					Projetos Entregues e de Destaque
				</h2>
				<p className="text-slate-600 text-center mt-2">
					Alguns dos projetos de destaque que realizamos e que ajudaram nossos
					clientes a crescer.
				</p>
				<div className="relative flex flex-col items-center mt-2 w-full h-full">
					<div className="w-full max-w-[1220px] min-h-[500px] overflow-hidden flex items-center">
						<div
							className="flex transition-transform duration-700 ease-in-out"
							style={{
								width: `${(displayItems.length * 100) / visibleCount}%`,
								transform: `translateX(0%)`,
							}}
						>
							{displayItems.map((item, idx) => {
								const isCenter = idx === 1;
								return (
									<div
										key={item.id || idx}
										className={`card overflow-hidden mx-6 ${
											isCenter
												? "ring-6 ring-accent scale-105 z-10 shadow-xl"
												: "opacity-80 z-0"
										}`}
										style={{
											width: "360px",
											minWidth: "360px",
											transition: "all 0.3s",
										}}
									>
										<img
											src={item.image}
											alt={item.title}
											className="w-full h-64 object-cover rounded-xl"
										/>
										<div className="p-6 text-center">
											<div className="font-semibold text-lg text-accent">
												{item.title}
											</div>
											<p className="text-sm text-slate-600 mt-2">
												{item.description}
											</p>
										</div>
									</div>
								);
							})}
						</div>
					</div>
					<div className="flex gap-6 mt-2">
						<button
							onClick={goPrev}
							className="btn-outline px-4 py-2 rounded-full"
						>
							◀
						</button>
						<button
							onClick={goNext}
							className="btn-outline px-4 py-2 rounded-full"
						>
							▶
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}
