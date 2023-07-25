import React, { useEffect, useState } from "react";

export function ServerSelector() {
	const [server, setServer] = useState<null | unknown>(null);

	useEffect(() => {
		fetch(
			"https://api.joinmastodon.org/servers?language=en&category=general&region=&ownership=&registrations="
		).then(async (e) => {
			const result = await e.json();
			if (Array.isArray(result)) {
				setServer(result[Math.floor(Math.random() * result.length)]);
			}
		});
	});

	return (
		<>
			<div
				style={{
					textAlign: "center",
				}}
			>
				<button
					onClick={() => {
						window.open(url, "_blank").focus();
					}}
					disabled
					className="button button--secondary button--lg"
				>
					Join A Random Server
				</button>
			</div>
		</>
	);
}
