import pandas as pd

def preprocess_data(file_path):
    # Load data
    data = pd.read_csv(file_path)
    
    # Example preprocessing steps
    data = data.dropna()  # Drop missing values
    data['feature'] = data['feature'].apply(lambda x: x.lower())  # Example transformation
    
    # Save preprocessed data
    data.to_csv('preprocessed_data.csv', index=False)

if __name__ == "__main__":
    preprocess_data('raw_data.csv')
