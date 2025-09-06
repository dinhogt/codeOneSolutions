import { useState, useEffect, useRef } from "react";

export default function Projects() {
	const [items, setItems] = useState([]);
	const [current, setCurrent] = useState(0);
	const [selectedProject, setSelectedProject] = useState(null);
	const [isTransitioning, setIsTransitioning] = useState(true);

	const visibleCount = 3;
	const [showModal, setShowModal] = useState(false);
	const modalDelay = 75; // tempo em ms para animar modal

	useEffect(() => {
		if (selectedProject) {
			const timer = setTimeout(() => setShowModal(true), modalDelay);
			return () => clearTimeout(timer);
		} else {
			setShowModal(false);
		}
	}, [selectedProject]);
	const trackRef = useRef(null);

	useEffect(() => {
		fetch("/public/data/projects.json")
			.then((res) => res.json())
			.then((data) => setItems(data))
			.catch(() => setItems([]));
	}, []);

	useEffect(() => {
		if (items.length === 0) return;
		const timer = setInterval(() => {
			goNext();
		}, 4000);
		return () => clearInterval(timer);
	}, [items]);

	const goPrev = () => {
		setIsTransitioning(true);
		setCurrent((prev) => prev - 1);
	};

	const goNext = () => {
		setIsTransitioning(true);
		setCurrent((prev) => prev + 1);
	};

	// duplicamos os itens para ciclo infinito
	const loopedItems = [...items, ...items];

	// Quando a transição acaba, resetamos o índice para evitar salto
	const handleTransitionEnd = () => {
		if (current >= items.length) {
			setIsTransitioning(false);
			setCurrent(current % items.length);
		}
		if (current < 0) {
			setIsTransitioning(false);
			setCurrent(items.length - 1);
		}
	};

	return (
		<section id="projects" className="py-10">
			<div className="container-xl">
				<h2 className="text-3xl text-center font-bold text-accent">
					Projetos que Inspiram
				</h2>
				<p className="text-slate-600 text-center mt-2">
					Alguns exemplos de projetos que podemos realizar e ajudar a transformar e impulsionar seus negócios.
				</p>

				<div className="relative flex flex-col items-center mt-2 w-full h-full">
					<div className="w-full max-w-[1220px] min-h-[500px] overflow-hidden flex items-center">
						<div
							ref={trackRef}
							className={`flex ${isTransitioning ? "transition-transform duration-[1000ms] ease-in-out" : ""
								}`}
							style={{
								width: `${(loopedItems.length * 100) / visibleCount}%`,
								transform: `translateX(-${(current * (100 / loopedItems.length))
									}%)`,
							}}
							onTransitionEnd={handleTransitionEnd}
						>
							{loopedItems.map((item, idx) => {
								// Calcula índice do card central
								const centerIndex = (current + Math.floor(visibleCount / 2)) % items.length;
								const isCenter = idx % items.length === centerIndex;

								return (
									<div
										key={item.id || idx}
										className={`card overflow-hidden mx-6 ${isCenter
												? "ring-0 scale-80 z-10 shadow-2xl"
												: "opacity-50 scale-95"
											} cursor-pointer transition-all duration-700`}
										style={{
											width: "360px",
											minWidth: "360px",
										}}
										onClick={() => setSelectedProject(item)}
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
						<button onClick={goPrev} className="btn-outline px-4 py-2 rounded-full">
							◀
						</button>
						<button onClick={goNext} className="btn-outline px-4 py-2 rounded-full">
							▶
						</button>
					</div>
				</div>
			</div>
			{/* Modal animado */}
			{selectedProject && (
				<div
					className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 ${showModal ? "opacity-100 bg-black/60 pointer-events-auto" : "opacity-0 pointer-events-none"
						}`}
					style={{ transitionDelay: `${modalDelay}ms` }}
					onClick={() => setSelectedProject(null)}
				>
					<div
						className={`bg-white rounded-xl p-8 max-w-2xl w-full relative shadow-2xl transform transition-transform duration-300 ${showModal ? "scale-100" : "scale-95"
							}`}
						style={{ transitionDelay: `${modalDelay}ms` }}
						onClick={(e) => e.stopPropagation()}
					>
						<button
							className="absolute top-4 right-4 text-2xl text-accent"
							onClick={() => setSelectedProject(null)}
						>
							&times;
						</button>
						<h3 className="text-2xl font-bold text-accent mb-4">
							{selectedProject.title}
						</h3>
						<img
							src={selectedProject.image}
							alt={selectedProject.title}
							className="aspect-video w-full rounded-lg object-cover mb-6"
						/>
						<p className="text-slate-700 leading-relaxed mb-4">
							{selectedProject.details || selectedProject.description}
						</p>
						{Array.isArray(selectedProject.images) && selectedProject.images.length > 0 && (
							<div className="flex flex-wrap gap-4 justify-center mt-2">
								{selectedProject.images.map((img, idx) => (
									<img
										key={idx}
										src={img}
										alt={selectedProject.title + ' extra ' + (idx + 1)}
										className="w-48 h-32 object-cover rounded-lg shadow"
									/>
								))}
							</div>
						)}
					</div>
				</div>
			)}
		</section>
	);
}
