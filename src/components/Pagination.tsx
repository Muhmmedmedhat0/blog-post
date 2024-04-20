interface Props {
  paginate: (pageNumber: number) => void;
	debouncedSearchTerm: string
	indexOfLastPost: number
	currentPage: number
	filteredPostsLength: number
}

function Pagination({currentPage, paginate, debouncedSearchTerm, indexOfLastPost, filteredPostsLength} : Props) {
  return <div className="container mx-auto">
	<div className="join flex justify-center items-center my-6">
		<button
			className="join-item btn btn-outline"
			onClick={() => paginate(currentPage - 1)}
			disabled={currentPage === 1 || debouncedSearchTerm !== ''}>
			Prev
		</button>
		<button
			className="join-item btn btn-outline"
			onClick={() => paginate(currentPage + 1)}
			disabled={
				indexOfLastPost >= filteredPostsLength ||
				debouncedSearchTerm !== ''
			}>
			Next
		</button>
	</div>
</div>
}

export default Pagination;
