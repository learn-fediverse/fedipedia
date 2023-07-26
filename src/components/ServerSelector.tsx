import React, { useEffect, useState } from "react";

export function ServerSelector() {
	const [servers, setServers] = useState<unknown[]>([]);

	useEffect(() => {
		fetch(
			"https://api.joinmastodon.org/servers?language=en&category=general&region=&ownership=&registrations=instant"
		).then(async (e) => {
			const result = await e.json();
			if (Array.isArray(result)) {
				setServers(result);
			}
		});
	}, []);

	return (
		<>
			<div
				style={{
					textAlign: "center",
				}}
			>
				<button
					disabled={!servers}
					onClick={() => {
						const server = servers[Math.floor(Math.random() * servers.length)];
						if (!server) return;
						window
							.open(
								`https://${
									(server as { domain?: string } | undefined)?.domain
								}/auth/sign_up`,
								"_blank"
							)
							.focus();
					}}
					className="button button--secondary button--lg"
				>
					Join A Random Server
				</button>
			</div>
		</>
	);
}
