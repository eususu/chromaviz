from chromaviz import visualize_collection
from langchain.vectorstores import Chroma
from langchain_community.embeddings.huggingface import HuggingFaceInstructEmbeddings

model_kwargs={"device": "cuda"}
encode_kwargs={'normalize_embeddings': True} # 요게 있어야 score를 cosine similarity로 반환한다.
embeddings = HuggingFaceInstructEmbeddings(
    model_name="BAAI/bge-m3",
    model_kwargs=model_kwargs,
    encode_kwargs=encode_kwargs,
)

vectordb = Chroma(
	collection_name="CLASS1",
	persist_directory="../../triai/DB/class1",
    embedding_function=embeddings,
)

print(vectordb)
visualize_collection(vectordb._collection)

