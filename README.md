
# k6 Load Testing Project

This repository contains an **advanced k6 load testing framework** for testing web applications and APIs. It is designed with scalability, modularity, and best practices in mind.

## Features
- Multiple testing scenarios (Load, Stress, Spike, etc.).
- Data-driven testing support using external CSV/JSON files.
- Exportable test results in multiple formats (Console, JSON, HTML).
- Integration-ready with Prometheus and Grafana for real-time monitoring.

## Getting Started

### Prerequisites
1. Install **k6**: Follow the [installation guide](https://k6.io/docs/getting-started/installation/).
2. Clone this repository:
   ```bash
   git clone https://github.com/alirezaedalat/k6-load-testing-project.git
   ```

### Running a Test
Run a sample load test using the following command:
```bash
k6 run scripts/load_scenario.js
```

### Exporting Results
Export the results for detailed analysis:
```bash
k6 run --out json=results/results.json scripts/load_scenario.js
```

## About This Repository
This repository provides a structured approach to load testing with k6. It includes placeholders for:
- Test scripts
- Configurations
- Results
- Data files
- Monitoring setup

## Contributing
We welcome contributions! Feel free to open issues or submit pull requests to improve this repository.

## License
This repository is licensed under the MIT License.

---

Happy Testing! 🚀
