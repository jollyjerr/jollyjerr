let open = $state(false);

export function useSearch() {
	function setOpen(new_state: boolean) {
		open = new_state;
	}

	return {
		get open() {
			return open;
		},
		setOpen
	};
}
