import React from 'react';
import { connect } from 'react-redux';
import { createArticle } from '../../actions/article'

function AddArticle({ addArticle }) {
    return (
        <button onClick={() =>
            addArticle('Testowy', 'Jarek', 'opis mały', 'opis duży')
        }>
            Dodaj artykuł
        </button>
    )
}

function mapStateToProps(state) {
    return {}
}

const mapDispatchToProps = {
    addArticle: createArticle
}

export default connect(mapStateToProps, mapDispatchToProps)(AddArticle);